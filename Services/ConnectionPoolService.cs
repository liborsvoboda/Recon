using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using Mysqlx.Crud;
using Opc.Ua;
using Opc.Ua.Client;
using System.Collections.Immutable;
using System.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace Recon.Services
{
    public class ConnectionPoolService : BackgroundService
    {
        private readonly ILogger<ConnectionPoolService> _logger;
        public ConnectionPoolService(ILogger<ConnectionPoolService> logger) { _logger = logger; }


        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            try {

                Thread thread = new Thread(() => InitConnectionPool());
                thread.IsBackground = true;
                thread.Start();

                while (true) {
                    try {

                        //Threads Management
                        foreach(Thread threadquery in Program.ConnectionPool.ThreadsQuery.ToList()) {
                            if (threadquery.ThreadState == System.Threading.ThreadState.Stopped) { 
                                Program.ConnectionPool.ThreadsQuery.Remove(threadquery); 
                            }
                        };



                        //Prepare For Transfer Insert Table To Target DB
                        if (Program.ConnectionPool.TargetDbQuery.Count == 0 && !Program.ConnectionPool.InsertDBQuery && Program.ConnectionPool.ThreadsQuery.Count == 0) {
                            List<OpcUaInsertTable> insertData = new List<OpcUaInsertTable>(); insertData = new ReconContext().OpcUaInsertTables.ToList();
                            if (insertData.Count > 0) { Program.ConnectionPool.InsertDBQuery = true; }
                        } else if(Program.ConnectionPool.TargetDbQuery.Count > 0) { Program.ConnectionPool.InsertDBQuery = false; }


                        //Restart and Repair Processed
                        if (Program.ConnectionPool.TargetDbQuery.Count > 0) {
                            Program.ConnectionPool.TargetDbQuery.ForEach(proc => {
                                if (proc != null && (DateTime.Now - proc.ProcessedStart).TotalSeconds > 60) {
                                    proc.Processed = false;
                                } else if (proc == null) { 
                                    Program.ConnectionPool.TargetDbQuery.Remove(proc); 
                                }
                            });
                        }


                        //Transfer Record to Target DB
                        if (Program.ConnectionPool.TargetDbQuery.Count > 0) {
                            ExportSettingList? exportSettingList;
                            exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();

                            if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MSSQL") {
                                Program.ConnectionPool.TargetDbQuery.ForEach(rec => {
                                    if (rec != null && !rec.Processed) {
                                        rec.Processed = true;
                                        thread = new Thread(() => SaveToTargetMsSQLDatabase(rec));
                                        thread.IsBackground = true;
                                        thread.Start();
                                        Program.ConnectionPool.ThreadsQuery.Add(thread);
                                    }
                                });
                            }
                            else if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MYSQL") {
                                Program.ConnectionPool.TargetDbQuery.ForEach(rec => {
                                    if (rec != null && !rec.Processed) {
                                        rec.Processed = true;
                                        thread = new Thread(() => SaveToTargetMySQLDatabase(rec));
                                        thread.IsBackground = true;
                                        thread.Start();
                                        Program.ConnectionPool.ThreadsQuery.Add(thread);
                                    }
                                });
                            }
                            else if(exportSettingList != null && !exportSettingList.EnableDbExport) { Program.ConnectionPool.TargetDbQuery = []; }

                        }


                        //Transfer Insert Table to Target DB
                        else if (Program.ConnectionPool.TargetDbQuery.Count == 0 && Program.ConnectionPool.InsertDBQuery) {
                            
                            ExportSettingList? exportSettingList;
                            exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();

                            if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MSSQL") {
                                try
                                {
                                    thread = new Thread(SaveInsertLocalToMsSQLDatabase);
                                    thread.IsBackground = true;
                                    thread.Start();
                                    Program.ConnectionPool.ThreadsQuery.Add(thread);
                                    Program.ConnectionPool.InsertDBQuery = false;
                                } catch { }
                            }
                            else if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MYSQL") {
                                try {
                                    thread = new Thread(SaveInsertLocalToMySQLDatabase);
                                    thread.IsBackground = true;
                                    thread.Start();
                                    Program.ConnectionPool.ThreadsQuery.Add(thread);
                                    Program.ConnectionPool.InsertDBQuery = false;
                                } catch { }
                            }
                        }

                        //All Queries Empty Thread Sleep
                        if(Program.ConnectionPool.TargetDbQuery.Count == 0 && !Program.ConnectionPool.InsertDBQuery) { Thread.Sleep(5000); }
                    }
                    catch (Exception ex) { GlobalFunctions.WriteLogFile("Connection Pool Cycle Service Exception: " + ex.StackTrace); }
                };
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Connection Pool Service Exception: " + ex.StackTrace); }
        }



        /// <summary>
        /// Init and Open Database Connection Pool
        /// </summary>
        private async static void InitConnectionPool() {

            while (true) {
                ExportSettingList? exportSettingList;
                exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();

                if (exportSettingList == null) {
                    Program.ConnectionPool.MsSqlConnection.Clear();
                    Program.ConnectionPool.MySqlConnection.Clear();
                    Thread.Sleep(5000); 
                
                } else if (exportSettingList.EnableDbExport) {

                    //Init Connection Pool
                    if (exportSettingList.DataBaseType == "MSSQL" && Program.ConnectionPool.MsSqlConnection.Count != exportSettingList.DbThreadCount) {
                        Program.ConnectionPool.MsSqlConnection.Clear();

                        for (int i = 0; i < exportSettingList.DbThreadCount; i++) { Program.ConnectionPool.MsSqlConnection.Add(new SqlConnection(exportSettingList.TargetDbConnectionString)); }

                    }
                    else if (exportSettingList.DataBaseType == "MSSQL" && Program.ConnectionPool.MsSqlConnection.Count != exportSettingList.DbThreadCount) {
                        Program.ConnectionPool.MySqlConnection.Clear();

                        for (int i = 0; i < exportSettingList.DbThreadCount; i++) { Program.ConnectionPool.MySqlConnection.Add(new MySqlConnection(exportSettingList.TargetDbConnectionString)); }
                    }

                    //Open Connection Pool
                    try {
                        if (exportSettingList.DataBaseType == "MSSQL") {
                            Program.ConnectionPool.MsSqlConnection.ForEach(conn => {
                                if (conn.State == ConnectionState.Closed) { conn.Open(); }
                            });
                        }
                        else if (exportSettingList.DataBaseType == "MYSQL") {
                            Program.ConnectionPool.MySqlConnection.ForEach(conn => {
                                if (conn.State == ConnectionState.Closed) { conn.Open(); }
                            });
                        }
                    }
                    catch (Exception ex) {
                        GlobalFunctions.WriteLogFile($"Database Type {exportSettingList.DataBaseType} is Unavailable: " + ex.StackTrace);
                    }

                    Thread.Sleep(5000);
                }
            }
        }



        /// <summary>
        /// Run MsSQL DbQuery saving to Target DB
        /// </summary>
        private async static void SaveToTargetMsSQLDatabase(Record rec) {
            try {
                bool proceed = false;bool foundedConn = false;
                while (!foundedConn) {
                    int closed = 0;
                    foreach (SqlConnection conn in Program.ConnectionPool.MsSqlConnection) { 
                        if (conn.State == ConnectionState.Open) {
                            try {
                                proceed = true; foundedConn = true;
                                string sql = string.Empty;
                                if (rec.RecordType == RecordType.Insert) {
                                    sql = $"INSERT INTO {rec.InsertTableName} ([{rec.InsertMachineNameColumnName}],[{rec.InsertVariableNameColumnName}],[{rec.InsertVariableValueColumnName}],[{rec.InsertTimeStampColumnName}]) VALUES ('{rec.MachineName}', '{rec.ValueName}', '{rec.Value}', '{rec.TimeStamp.Value.ToString("yyyy-MM-dd H:mm:ss")}');";
                                }
                                else if (rec.RecordType == RecordType.Update) {
                                    sql = $"UPDATE {rec.UpdateTableName} SET [{rec.UpdateVariableValueColumnName}] = '{rec.Value}', [{rec.UpdateTimeStampColumnName}] = '{rec.TimeStamp.Value.ToString("yyyy-MM-dd H:mm:ss")}' WHERE [{rec.UpdateVariablePkColumnName}] = '{rec.UpdateVariablePkColumnValue}';";
                                }

                                DataSet dataTable = new();
                                SqlDataAdapter mDataAdapter = new(new SqlCommand(sql, conn));
                                mDataAdapter.Fill(dataTable);
                            }
                            //Record Not Saved to Target DB save to Local
                            catch (Exception ex) {
                                if (rec.RecordType == RecordType.Insert) {
                                    OpcUaInsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                                    new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                                    var data = new ReconContext().OpcUaInsertTables.Add(record);
                                    data.Context.SaveChanges();
                                }
                            }


                            Program.ConnectionPool.TargetDbQuery.Remove(rec);
                            break;
                        }
                        else if (conn.State == ConnectionState.Closed) { closed++; }
                        if (closed == Program.ConnectionPool.MsSqlConnection.Count) { 
                            foundedConn = true; 
                        }
                    };
                }
                if (!proceed) { //Not openned any Connection
                    try {
                        if (rec.RecordType == RecordType.Insert) {
                            OpcUaInsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            var data = new ReconContext().OpcUaInsertTables.Add(record);
                            data.Context.SaveChanges();
                            
                        }
                    }
                    catch { }
                }
                Program.ConnectionPool.TargetDbQuery.Remove(rec);
            }
            catch (Exception ex) {
                GlobalFunctions.WriteLogFile("SaveToTargetMsSQLDatabase Exception: " + ex.StackTrace);
            }
        }



        /// <summary>
        /// Run MySQL Query
        /// </summary>
        /// <param name="rec"></param>
        private async static void SaveToTargetMySQLDatabase(Record rec) {
            try {
                bool proceed = false; bool foundedConn = false;
                while (!foundedConn) {
                    int closed = 0;
                    foreach (MySqlConnection conn in Program.ConnectionPool.MySqlConnection) {
                        if (conn.State == ConnectionState.Open) {
                            proceed = true; foundedConn = true;
                            try {
                                if (rec.RecordType == RecordType.Insert) {
                                    MySqlCommand comm = conn.CreateCommand();
                                    comm.CommandText = $"INSERT INTO {rec.InsertTableName}({rec.InsertMachineNameColumnName},{rec.InsertVariableNameColumnName},{rec.InsertVariableValueColumnName},{rec.InsertTimeStampColumnName}) VALUES('{rec.MachineName}', '{rec.ValueName}', '{rec.Value}', '{rec.TimeStamp.Value.ToString("yyyy-MM-dd H:mm:ss")}')";
                                    comm.ExecuteNonQuery();
                                }
                                else if (rec.RecordType == RecordType.Update) {
                                    MySqlCommand comm = conn.CreateCommand();
                                    comm.CommandText = $"UPDATE {rec.UpdateTableName} SET {rec.UpdateVariableValueColumnName} = '{rec.Value}', {rec.UpdateTimeStampColumnName} = '{rec.TimeStamp.Value.ToString("yyyy-MM-dd H:mm:ss")}' WHERE {rec.UpdateVariablePkColumnName} = '{rec.UpdateVariablePkColumnValue}'";
                                    comm.ExecuteNonQuery();
                                }
                            }
                            //Record Not Saved to Target DB save to Local
                            catch (Exception ex) {
                                if (rec.RecordType == RecordType.Insert) {
                                    OpcUaInsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                                    new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                                    var data = new ReconContext().OpcUaInsertTables.Add(record);
                                    data.Context.SaveChanges();
                                }
                            }
                            Program.ConnectionPool.TargetDbQuery.Remove(rec);
                            break;
                        }
                        else if (conn.State == ConnectionState.Closed) { closed++; }
                        if (closed == Program.ConnectionPool.MySqlConnection.Count) { 
                            foundedConn = true; 
                        }
                    };
                }
                if (!proceed) { //Not openned any Connection
                    try {
                        if (rec.RecordType == RecordType.Insert) {
                            OpcUaInsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;"); 
                            var data = new ReconContext().OpcUaInsertTables.Add(record);
                            data.Context.SaveChanges();
                        }
                    }
                    catch { }
                }
                Program.ConnectionPool.TargetDbQuery.Remove(rec);

            }
            catch (Exception ex) {
                GlobalFunctions.WriteLogFile("SaveToTargetMsSQLDatabase Exception: " + ex.StackTrace);
            }
        }


        /// <summary>
        /// Insert Local Insert Table to Target MSSQL DB
        /// </summary>
        /// <param name="rec"></param>
        private async static void SaveInsertLocalToMsSQLDatabase() {
            try {
                bool foundedConn = false;
                while (!foundedConn) {
                    int closed = 0;
                    foreach (SqlConnection conn in Program.ConnectionPool.MsSqlConnection) {
                        if (conn.State == ConnectionState.Open) {
                            foundedConn = true;

                            List<OpcUaInsertTable> insertRecs;
                            insertRecs = new ReconContext().OpcUaInsertTables.ToList();

                            List<MachineVariableList> machineVariableList;
                            machineVariableList = new ReconContext().MachineVariableLists.ToList();

                            string sql = string.Empty;
                            insertRecs.ForEach(insertRec => {
                                MachineVariableList? machineVars = machineVariableList.Where(a => a.MachineName == insertRec.MachineName && a.VariableName == insertRec.VariableName).FirstOrDefault();

                                if (machineVars != null) {
                                    sql += $"INSERT INTO {machineVars.InsertTableName} ([{machineVars.InsertMachineNameColumnName}],[{machineVars.InsertVariableNameColumnName}],[{machineVars.InsertVariableValueColumnName}],[{machineVars.InsertTimeStampColumnName}]) VALUES ('{insertRec.MachineName}', '{insertRec.VariableName}', '{insertRec.VariableValue}', '{insertRec.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}');" + Environment.NewLine;
                                }
                            });

                            DataSet dataTable = new();
                            SqlDataAdapter mDataAdapter = new(new SqlCommand(sql, conn));
                            mDataAdapter.Fill(dataTable);

                            ReconContext data = new ReconContext(); 
                            data.Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            data.OpcUaInsertTables.RemoveRange(insertRecs);
                            int result = data.SaveChanges();

                            break;
                        }
                        else if (conn.State == ConnectionState.Closed) { closed++; }
                        if (closed == Program.ConnectionPool.MsSqlConnection.Count) {
                            foundedConn = true;
                        }
                    };
                }
            }
            catch (Exception ex) {
                GlobalFunctions.WriteLogFile("Save from Local DB To Target MsSQL Database Exception: " + ex.StackTrace);
            }
        }


        /// <summary>
        /// Insert Local Insert Table to Target MYSQL DB
        /// </summary>
        /// <param name="rec"></param>
        private async static void SaveInsertLocalToMySQLDatabase() {
            try {
                bool foundedConn = false;
                while (!foundedConn) {
                    int closed = 0;
                    foreach (MySqlConnection conn in Program.ConnectionPool.MySqlConnection) {
                        if (conn.State == ConnectionState.Open)
                        {
                            foundedConn = true;

                            List<OpcUaInsertTable> insertRecs;
                            insertRecs = new ReconContext().OpcUaInsertTables.ToList();

                            List<MachineVariableList> machineVariableList;
                            machineVariableList = new ReconContext().MachineVariableLists.ToList();

                            string sql = string.Empty;
                            insertRecs.ForEach(insertRec => {
                                MachineVariableList? machineVars = machineVariableList.Where(a => a.MachineName == insertRec.MachineName && a.VariableName == insertRec.VariableName).FirstOrDefault();

                                if (machineVars != null)
                                {
                                    sql += $"INSERT INTO {machineVars.InsertTableName}({machineVars.InsertMachineNameColumnName},{machineVars.InsertVariableNameColumnName},{machineVars.InsertVariableValueColumnName},{machineVars.InsertTimeStampColumnName}) VALUES('{insertRec.MachineName}', '{insertRec.VariableName}', '{insertRec.VariableValue}', '{insertRec.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}')" + Environment.NewLine;
                                }
                            });

                            MySqlCommand comm = conn.CreateCommand();
                            comm.CommandText = sql;
                            comm.ExecuteNonQuery();

                            ReconContext data = new ReconContext();
                            data.Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            data.OpcUaInsertTables.RemoveRange(insertRecs);
                            int result = data.SaveChanges();

                            break;
                        }
                        else if (conn.State == ConnectionState.Closed) { closed++; }
                        if (closed == Program.ConnectionPool.MySqlConnection.Count) {
                            foundedConn = true;
                        }
                    };
                }
            }
            catch (Exception ex)
            {
                GlobalFunctions.WriteLogFile("Save from Local DB To Target MsSQL Database Exception: " + ex.StackTrace);
            }
        }

    }
}

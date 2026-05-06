using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using Mysqlx.Crud;
using Opc.Ua;
using Opc.Ua.Client;
using System.Collections.Immutable;
using System.Data;


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
                        //Prepare For Transfer Insert Table To Target DB
                        if (Program.ConnectionPool.TargetDbQuery.Count == 0 && Program.ConnectionPool.InsertDBQuery.Count == 0) {
                            List<InsertTable> insertData = new List<InsertTable>(); insertData = new ReconContext().InsertTables.ToList();
                            insertData.ForEach(insertRec => { Program.ConnectionPool.InsertDBQuery.Add(insertRec.Id); });
                        } else if(Program.ConnectionPool.TargetDbQuery.Count > 0) { Program.ConnectionPool.InsertDBQuery = []; }


                        //Restart Processed
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
                                    }
                                });
                            }
                            else if(exportSettingList != null && !exportSettingList.EnableDbExport) { Program.ConnectionPool.TargetDbQuery = []; }

                        }


                        //Transfer Insert Table to Target DB
                        else if (Program.ConnectionPool.TargetDbQuery.Count == 0 && Program.ConnectionPool.InsertDBQuery.Count > 0) {
                            int rec = Program.ConnectionPool.InsertDBQuery[0];
                            ExportSettingList? exportSettingList;
                            exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();

                            if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MSSQL") {
                                try
                                {
                                    thread = new Thread(() => SaveInsertLocalToMsSQLDatabase(rec));
                                    thread.IsBackground = true;
                                    thread.Start();
                                    Program.ConnectionPool.InsertDBQuery.Remove(Program.ConnectionPool.InsertDBQuery[0]);
                                } catch { }
                            }
                            else if (exportSettingList != null && exportSettingList.EnableDbExport && exportSettingList.DataBaseType == "MYSQL") {
                                try
                                {
                                    thread = new Thread(() => SaveInsertLocalToMySQLDatabase(rec));
                                    thread.IsBackground = true;
                                    thread.Start();
                                    Program.ConnectionPool.InsertDBQuery.Remove(Program.ConnectionPool.InsertDBQuery[0]);
                                } catch { }
                            }
                        }

                        //All Queries Empty Thread Sleep
                        if(Program.ConnectionPool.TargetDbQuery.Count == 0 && Program.ConnectionPool.InsertDBQuery.Count == 0) { Thread.Sleep(5000); }
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
                                    InsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                                    new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                                    var data = new ReconContext().InsertTables.Add(record);
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
                            InsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            var data = new ReconContext().InsertTables.Add(record);
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
                                    InsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                                    new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                                    var data = new ReconContext().InsertTables.Add(record);
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
                            InsertTable record = new() { MachineName = rec.MachineName, VariableName = rec.ValueName, VariableValue = rec.Value, TimeStamp = rec.TimeStamp.Value };
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;"); 
                            var data = new ReconContext().InsertTables.Add(record);
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
        private async static void SaveInsertLocalToMsSQLDatabase(int rec) {
            try {
                foreach (SqlConnection conn in Program.ConnectionPool.MsSqlConnection) {
                    if (conn.State == ConnectionState.Open) {
                        InsertTable? insertRec;
                        insertRec = new ReconContext().InsertTables.Where(a => a.Id == rec).FirstOrDefault();

                        if (insertRec != null) {
                            MachineVariableList? machineVariableList;
                            machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == insertRec.MachineName && a.VariableName == insertRec.VariableName).FirstOrDefault();

                            if (machineVariableList != null) {
                                string sql = $"INSERT INTO {machineVariableList.InsertTableName} ([{machineVariableList.InsertMachineNameColumnName}],[{machineVariableList.InsertVariableNameColumnName}],[{machineVariableList.InsertVariableValueColumnName}],[{machineVariableList.InsertTimeStampColumnName}]) VALUES ('{insertRec.MachineName}', '{insertRec.VariableName}', '{insertRec.VariableValue}', '{insertRec.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}');";

                                DataSet dataTable = new();
                                SqlDataAdapter mDataAdapter = new(new SqlCommand(sql, conn));
                                mDataAdapter.Fill(dataTable);
                            }
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            var deleteRec = new ReconContext().InsertTables.Remove(insertRec);
                            deleteRec.Context.SaveChanges();
                        }
                        break;
                    }
                };
            }
            catch (Exception ex) {
                GlobalFunctions.WriteLogFile("Save from Local DB To Target MsSQL Database Exception: " + ex.StackTrace);
            }
        }


        /// <summary>
        /// Insert Local Insert Table to Target MYSQL DB
        /// </summary>
        /// <param name="rec"></param>
        private async static void SaveInsertLocalToMySQLDatabase(int rec) {
            try {
                foreach (MySqlConnection conn in Program.ConnectionPool.MySqlConnection) {
                    if (conn.State == ConnectionState.Open) {
                        InsertTable? insertRec;
                        insertRec = new ReconContext().InsertTables.Where(a => a.Id == rec).FirstOrDefault();

                        if (insertRec != null) {
                            MachineVariableList? machineVariableList;
                            machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == insertRec.MachineName && a.VariableName == insertRec.VariableName).FirstOrDefault();

                            if (machineVariableList != null) {
                                MySqlCommand comm = conn.CreateCommand();
                                comm.CommandText = $"INSERT INTO {machineVariableList.InsertTableName}({machineVariableList.InsertMachineNameColumnName},{machineVariableList.InsertVariableNameColumnName},{machineVariableList.InsertVariableValueColumnName},{machineVariableList.InsertTimeStampColumnName}) VALUES('{insertRec.MachineName}', '{insertRec.VariableName}', '{insertRec.VariableValue}', '{insertRec.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}')";
                                comm.ExecuteNonQuery();
                            }
                            new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                            var deleteRec = new ReconContext().InsertTables.Remove(insertRec);
                            deleteRec.Context.SaveChanges();
                        }
                        break;
                    }
                };
            }
            catch (Exception ex)
            {
                GlobalFunctions.WriteLogFile("Save from Local DB To Target MsSQL Database Exception: " + ex.StackTrace);
            }
        }

    }
}

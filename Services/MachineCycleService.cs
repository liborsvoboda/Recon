using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using Opc.UaFx;
using Opc.UaFx.Client;
using System.Collections.Immutable;
using System.Data;
using System.Reflection.PortableExecutable;


namespace Recon.Services
{
    public class MachineCycleService : BackgroundService
    {
        private readonly ILogger<MachineCycleService> _logger;
        private static PeriodicTimer timer;

        public MachineCycleService(ILogger<MachineCycleService> logger) { _logger = logger; }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            timer = new PeriodicTimer(TimeSpan.FromMilliseconds(double.Parse(Program.Settings.SettingData.GetValueOrDefault("machinesLoadInterval"))));
            try {
                while (await timer.WaitForNextTickAsync() && true) {
                    
                    List<MachineList> machineList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                        machineList = new ReconContext().MachineLists.ToList(); }

                    machineList.ForEach(machine => {
                        Thread thread = new Thread(() => GetOPCData(machine));
                        thread.IsBackground = true;
                        thread.Start();
                    });
                }
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Machine Loader Service Program Exception: " + ex.StackTrace); }

            Debug.WriteLine(DateTime.Now);
            _logger.LogInformation("Machine Loader Service running at: {time}", DateTimeOffset.Now);
        }



        private static void GetOPCData(MachineList machineName) {
            DateTime startCycle = DateTime.Now;
            DateTime finishCycle = DateTime.Now;
            List<MachineVariableList> machineVariableList;

            if (bool.Parse(Program.Settings.SettingData.GetValueOrDefault("autoDetectCycleTime"))) { startCycle = DateTime.Now; }

            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted }))
            {
                machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == machineName.MachineName).ToList();
            }

            OpcClient client = new(machineName.Connection);
            try {
                client.Connect();
                List<OpcReadNode> nodeData = new List<OpcReadNode>();
                machineVariableList.ForEach(variable => {
                    if (variable.VariableName == "COM_ALIVE" || variable.VariableName == "OPC_ALIVE")
                    {
                        nodeData.Add(new OpcReadNode($"ns=2;s=Machines_definitions.{variable.VariableName}"));
                    }
                    else { nodeData.Add(new OpcReadNode($"ns=2;s=Machine1.{variable.VariableName}")); }
                });

                var result = client.ReadNodes(nodeData.ToArray());
                client.Disconnect();

                //FILL PREVIOUS DATA
                MachineData machineData = new();
                if (Program.MachinesData.Where(a => a.MachineName == machineName.MachineName).FirstOrDefault() != null) {
                    Program.MachinesData.First(a => a.MachineName == machineName.MachineName).PreviousData = Program.MachinesData.First(a => a.MachineName == machineName.MachineName).LastData.Keys.ToDictionary(_ => _, _ => Program.MachinesData.First(a => a.MachineName == machineName.MachineName).LastData[_]);
                    Program.MachinesData.First(a => a.MachineName == machineName.MachineName).LastData.Clear();
                }

                //PREPARE LAST DATA
                machineData.MachineName = machineName.MachineName;
                machineData.TimeStamp = DateTime.Now;
                int index = 0;
                machineVariableList.ForEach(variable => {
                    machineData.LastData.Add(variable.VariableName, result.ElementAt(index).Value);
                    index++;
                });

                //FILL DATA
                if (Program.MachinesData.Where(a => a.MachineName == machineName.MachineName).FirstOrDefault() == null) {
                    Program.MachinesData.Add(machineData);
                } else {
                    Program.MachinesData.First(a => a.MachineName == machineName.MachineName).TimeStamp = machineData.TimeStamp;
                    Program.MachinesData.First(a => a.MachineName == machineName.MachineName).LastData = machineData.LastData;
                }

            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile($"Machine {machineName.MachineName} not Connected " + GlobalFunctions.GetErrMsg(ex)); }

            //WriteToDBStart
            ExportSettingList? exportSettingList;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();
            }

            if (exportSettingList != null && exportSettingList.EnableDbExport) {
                Program.MachinesData.Where(a => a.MachineName == machineName.MachineName).ToList().ForEach(x => {
                    List<MachineVariableList> machineVariableList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                        machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == x.MachineName).ToList();
                    }

                    bool saveToLocal = false;
                    foreach (var kvp in x.LastData) {
                        foreach (var kvk in x.PreviousData) {
                            if (kvk.Key == kvp.Key && kvk.Value.ToString() != kvp.Value.ToString()) {
                                //DO INSERT or UPDATE
                                var variable = machineVariableList.Where(a => a.VariableName == kvp.Key).FirstOrDefault();
                                if (variable?.DbRequestType == "Insert") {

                                    if (exportSettingList.DataBaseType == "MSSQL") {
                                        try {
                                            string insert = $"INSERT INTO {variable.InsertTableName} ([{variable.InsertMachineNameColumnName}],[{variable.InsertVariableNameColumnName}],[{variable.InsertVariableValueColumnName}]) VALUES ('{x.MachineName}', '{kvp.Key}', '{kvp.Value}');";
                                            SqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                            cnn.Open();
                                            if (cnn.State == ConnectionState.Open) {
                                                DataSet dataTable = new();
                                                SqlDataAdapter mDataAdapter = new(new SqlCommand(insert, cnn));
                                                mDataAdapter.Fill(dataTable);
                                                cnn.Close();
                                                saveToLocal = false;
                                            } else { saveToLocal = true; }

                                            if (saveToLocal) {
                                                InsertTable record = new() { MachineName = x.MachineName, VariableName = kvp.Key, VariableValue = kvp.Value.ToString() };
                                                var data = new ReconContext().InsertTables.Add(record);
                                                data.Context.SaveChanges();
                                            }
                                        }
                                        catch (Exception ex) {
                                            GlobalFunctions.WriteLogFile("Machine Loader Service Insert MSSQL Program Exception: " + ex.StackTrace);
                                            InsertTable record = new() { MachineName = x.MachineName, VariableName = kvp.Key, VariableValue = kvp.Value.ToString() };
                                            var data = new ReconContext().InsertTables.Add(record);
                                            data.Context.SaveChanges();
                                        }

                                    }
                                    else if (exportSettingList.DataBaseType == "MYSQL") {
                                        try {
                                            MySqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                            cnn.Open();
                                            if (cnn.State == ConnectionState.Open) {
                                                DataSet dataTable = new();
                                                MySqlCommand comm = cnn.CreateCommand();
                                                comm.CommandText = $"INSERT INTO {variable.InsertTableName}({variable.InsertMachineNameColumnName},{variable.InsertVariableNameColumnName},{variable.InsertVariableValueColumnName}) VALUES('{x.MachineName}', '{kvp.Key}', '{kvp.Value}')";
                                                comm.ExecuteNonQuery();
                                                cnn.Close();
                                                saveToLocal = false;
                                            } else { saveToLocal = true; }

                                            if (saveToLocal) {
                                                InsertTable record = new() { MachineName = x.MachineName, VariableName = kvp.Key, VariableValue = kvp.Value.ToString() };
                                                var data = new ReconContext().InsertTables.Add(record);
                                                data.Context.SaveChanges();
                                            }
                                        }
                                        catch (Exception ex) {
                                            GlobalFunctions.WriteLogFile("Machine Loader Service Insert MYSQL Program Exception: " + ex.StackTrace);
                                            InsertTable record = new() { MachineName = x.MachineName, VariableName = kvp.Key, VariableValue = kvp.Value.ToString() };
                                            var data = new ReconContext().InsertTables.Add(record);
                                            data.Context.SaveChanges();
                                        }
                                    }
                                }
                                else if (variable?.DbRequestType == "Update") {

                                    if (exportSettingList.DataBaseType == "MSSQL") {
                                        try {
                                            string update = $"UPDATE {variable.UpdateTableName} SET [{variable.UpdateVariableValueColumnName}] = '{kvp.Value}', [{variable.UpdateTimeStampColumnName}] = '{DateTime.Now.ToString("yyyy-MM-dd H:mm:ss")}' WHERE [{variable.UpdateVariablePkColumnName}] = '{variable.UpdateVariablePkColumnValue}';";
                                            SqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                            cnn.Open();
                                            if (cnn.State == ConnectionState.Open) {
                                                DataSet dataTable = new();
                                                SqlDataAdapter mDataAdapter = new(new SqlCommand(update, cnn));
                                                mDataAdapter.Fill(dataTable);
                                                cnn.Close();
                                            }
                                        }
                                        catch (Exception ex) { GlobalFunctions.WriteLogFile("Machine Loader Service Update MSSQL Program Exception: " + ex.StackTrace); }

                                    } else if (exportSettingList.DataBaseType == "MYSQL") {
                                        try {
                                            MySqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                            cnn.Open();
                                            if (cnn.State == ConnectionState.Open) {
                                                DataSet dataTable = new();
                                                MySqlCommand comm = cnn.CreateCommand();
                                                comm.CommandText = $"UPDATE {variable.UpdateTableName} SET {variable.UpdateVariableValueColumnName} = '{kvp.Value}', {variable.UpdateTimeStampColumnName} = '{DateTime.Now.ToString("yyyy-MM-dd H:mm:ss")}' WHERE {variable.UpdateVariablePkColumnName} = '{variable.UpdateVariablePkColumnValue}'";
                                                comm.ExecuteNonQuery();
                                                cnn.Close();
                                            }
                                        }
                                        catch (Exception ex) { GlobalFunctions.WriteLogFile("Machine Loader Service Update MYSQL Program Exception: " + ex.StackTrace); }

                                    }
                                }
                                break;
                            }
                        }
                    }
                });
            }
            //WriteToDBEnd


            if (bool.Parse(Program.Settings.SettingData.GetValueOrDefault("autoDetectCycleTime"))) {
                finishCycle = DateTime.Now;

                Program.Settings.SettingData = Program.Settings.SettingData.SetItem(machineName.MachineName, (finishCycle - startCycle).TotalMilliseconds.ToString());
                try {
                    File.WriteAllText(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "config.json"), JsonSerializer.Serialize(Program.Settings.SettingData));
                } catch (Exception ex) { }
            }

        }
    }
}

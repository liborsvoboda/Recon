using Microsoft.Data.SqlClient;
using Opc.UaFx;
using Opc.UaFx.Client;
using System.Collections.Immutable;
using System.Data;


namespace Recon.Services
{
    public class MachineLoaderService : BackgroundService
    {
        private readonly ILogger<MachineLoaderService> _logger;
        private static PeriodicTimer timer;

        public MachineLoaderService(ILogger<MachineLoaderService> logger) { _logger = logger; }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            timer = new PeriodicTimer(TimeSpan.FromMilliseconds(double.Parse(Program.Settings.SettingData.GetValueOrDefault("machinesLoadInterval"))));

            try {
                while (await timer.WaitForNextTickAsync() && true) {

                    List<MachineList> machineList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) { 
                        machineList = new ReconContext().MachineLists.ToList(); }

                    machineList.ForEach(machine => {

                        List<MachineVariableList> machineVariableList;
                        using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                            machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == machine.MachineName).ToList(); }

                        var client = new OpcClient(machine.Connection);
                        try
                        {
                            client.Connect();
                            List<OpcReadNode> nodeData = new List<OpcReadNode>();
                            machineVariableList.ForEach(variable =>
                            {
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
                            if (Program.MachinesData.Where(a => a.MachineName == machine.MachineName).FirstOrDefault() != null) {
                                Program.MachinesData.First(a => a.MachineName == machine.MachineName).PreviousData = Program.MachinesData.First(a => a.MachineName == machine.MachineName).LastData.Keys.ToDictionary(_ => _, _ => Program.MachinesData.First(a => a.MachineName == machine.MachineName).LastData[_]);
                                Program.MachinesData.First(a => a.MachineName == machine.MachineName).LastData.Clear(); 
                            }

                            //PREPARE LAST DATA
                            machineData.MachineName = machine.MachineName;
                            machineData.TimeStamp = DateTime.Now;
                            int index = 0;
                            machineVariableList.ForEach(variable => {
                                machineData.LastData.Add(variable.VariableName, result.ElementAt(index).Value);
                                index ++;
                            });

                            //FILL DATA
                            if (Program.MachinesData.Where(a => a.MachineName == machine.MachineName).FirstOrDefault() == null) {
                                Program.MachinesData.Add(machineData);
                            } else {
                                Program.MachinesData.First(a => a.MachineName == machine.MachineName).TimeStamp = machineData.TimeStamp;
                                Program.MachinesData.First(a => a.MachineName == machine.MachineName).LastData = machineData.LastData;
                            }

                        } catch (Exception ex) { GlobalFunctions.WriteLogFile($"Machine {machine.MachineName} not Connected " + GlobalFunctions.GetErrMsg(ex)); }

                    });


                    //TODO WRITE TO DB
                    ExportSettingList exportSettingList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                        exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault(); }

                    if (exportSettingList.EnableDbExport) {
                        Program.MachinesData.ForEach(x => {
                            List<MachineVariableList> machineVariableList;
                            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                                machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == x.MachineName).ToList(); }

                            foreach (var kvp in x.LastData) {
                                foreach (var kvk in x.PreviousData) {
                                    if (kvk.Key == kvp.Key && kvk.Value.ToString() != kvp.Value.ToString()) {
                                        //DO INSERT or UPDATE
                                        var variable = machineVariableList.Where(a => a.VariableName == kvp.Key).FirstOrDefault();
                                        if (variable?.DbRequestType == "Insert") {
                                            string insert = $"INSERT INTO {variable.InsertTableName} ('{variable.InsertVariableNameColumnName}','{variable.InsertVariableValueColumnName}') VALUES ('{kvp.Key}', '{kvp.Value}');";
                                            try {
                                                SqlConnection cnn = new SqlConnection(exportSettingList.TargetDbConnectionString);
                                                cnn.Open();
                                                if (cnn.State == ConnectionState.Open) {
                                                    DataSet dataTable = new();
                                                    SqlDataAdapter mDataAdapter = new SqlDataAdapter(new SqlCommand(insert, cnn));
                                                    mDataAdapter.Fill(dataTable);
                                                    cnn.Close();
                                                }
                                            } catch (Exception ex) { GlobalFunctions.WriteLogFile("Program Exception: " + ex.StackTrace); }
                                        } else if (variable?.DbRequestType == "Update") {
                                            string update = $"UPDATE {variable.UpdateTableName} SET {variable.UpdateVariableValueColumnName} = '{kvp.Value}' WHERE {variable.UpdateVariablePkColumnName} = '{variable.UpdateVariablePkColumnValue}';";
                                            try {
                                                SqlConnection cnn = new SqlConnection(exportSettingList.TargetDbConnectionString);
                                                cnn.Open();
                                                if (cnn.State == ConnectionState.Open) {
                                                    DataSet dataTable = new();
                                                    SqlDataAdapter mDataAdapter = new SqlDataAdapter(new SqlCommand(update, cnn));
                                                    mDataAdapter.Fill(dataTable);
                                                    cnn.Close();
                                                }
                                            } catch (Exception ex) { GlobalFunctions.WriteLogFile("Program Exception: " + ex.StackTrace); }
                                        }
                                        break;
                                    }
                                }
                            }
                        });
                    }
                }
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Program Exception: " + ex.StackTrace); }

            Debug.WriteLine(DateTime.Now);
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
        }
    }
}

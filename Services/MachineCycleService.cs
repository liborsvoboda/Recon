using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using Opc.Ua;
using Opc.Ua.Client;
using System.Collections.Immutable;
using System.Data;


namespace Recon.Services
{
    public class MachineCycleService : BackgroundService
    {
        private readonly ILogger<MachineCycleService> _logger;
        private static PeriodicTimer timer;
        

        public MachineCycleService(ILogger<MachineCycleService> logger) { _logger = logger; }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            ExportSettingList? exportSettingList;
            timer = new PeriodicTimer(TimeSpan.FromSeconds(10));
            try {
                while (await timer.WaitForNextTickAsync() && true) {

                    List<MachineList> machineList;
                    machineList = new ReconContext().MachineLists.ToList();

                    //Threads Management
                    foreach (MachineThread threadquery in Program.MachineThreads.MachineThread.ToList()) {
                        if (threadquery.Thread?.ThreadState == System.Threading.ThreadState.Stopped) {
                             Program.MachineThreads.MachineThread.Remove(threadquery);
                        }
                    };

                    //Create OPC Threads if NOT exist
                    machineList.ForEach(machine => {
                        if (Program.MachineThreads.MachineThread.Where(a => a.MachineName == machine.MachineName).Count() == 0) {
                            Thread thread = new Thread(() => GetOPCData(machine));
                            thread.IsBackground = true;
                            thread.Start();
                            Program.MachineThreads.MachineThread.Add(new MachineThread() { MachineName = machine.MachineName, Thread = thread });
                        }
                    });


                    exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();
                    if (exportSettingList != null) {
                        timer = new PeriodicTimer(TimeSpan.FromSeconds(exportSettingList.MachineCycleLoadInterval));
                    }
                }
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Machine Loader Service Program Exception: " + ex.StackTrace); }

            Debug.WriteLine(DateTime.Now);
            _logger.LogInformation("Machine Loader Service running at: {time}", DateTimeOffset.Now);
        }



        private async static void GetOPCData(MachineList machineName) {
            List<MachineVariableList> machineVariableList;
            DataValueCollection readedNodes = new(); IList<ServiceResult> errors;

            machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == machineName.MachineName).ToList();
            

            var config = new ApplicationConfiguration()
            {
                ApplicationName = "MujOpcKlient",
                ApplicationUri = Utils.Format("urn:{0}:MujOpcKlient", System.Net.Dns.GetHostName()),
                ApplicationType = ApplicationType.Client,
                ClientConfiguration = new ClientConfiguration { DefaultSessionTimeout = 60000 },
                TransportQuotas = new TransportQuotas { OperationTimeout = 15000 }
            };
            //ApplicationInstance? application = new(config);

            try
            {

                List<NodeId> nodeData = new List<NodeId>();
                machineVariableList.ForEach(variable =>
                {
                    if (variable.VariableName == "COM_ALIVE" || variable.VariableName == "OPC_ALIVE")
                    {
                        nodeData.Add(new NodeId($"Machines_definitions.{variable.VariableName}", 2));
                    }
                    else { nodeData.Add(new NodeId($"Machine1.{variable.VariableName}", 2)); }
                });

                EndpointDescription endpointDescription = new(machineName.Connection) { SecurityMode = MessageSecurityMode.None };
                ConfiguredEndpoint endpoint = new(null, endpointDescription, EndpointConfiguration.Create(config));
                Session session = await Session.Create(config, endpoint, true, "Session", 60000, null, null);
                if (session.Connected) { session.ReadValues(nodeData, out readedNodes, out errors); }
                await session.CloseAsync();

                //Machine Status
                Program.MachineStatuses.ToList().ForEach(status => { if (status == null) { Program.MachineStatuses.Remove(status); } });
                List<MachineStatus> machineStatusCount = Program.MachineStatuses.Where(a => a.MachineName == machineName.MachineName).ToList();
                if (machineStatusCount.Count == 0) {
                    Program.MachineStatuses.Add(new MachineStatus() { MachineName = machineName.MachineName, IsRunning = true });
                } else {
                    machineStatusCount.ForEach(machineStat => { Program.MachineStatuses.Remove(machineStat); });
                    Program.MachineStatuses.Add(new MachineStatus() { MachineName = machineName.MachineName, IsRunning = true });
                }

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
                    machineData.LastData.Add(variable.VariableName, readedNodes[index].Value);
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
            catch (Exception ex) {

                //Machine Status
                Program.MachineStatuses.ToList().ForEach(status => { if (status == null) { Program.MachineStatuses.Remove(status); } });
                MachineStatus? machineStatusCount = Program.MachineStatuses.Where(a => a.MachineName == machineName.MachineName).FirstOrDefault();
                if (machineStatusCount == null) {
                    Program.MachineStatuses.Add(new MachineStatus() { MachineName = machineName.MachineName, IsRunning = false });
                } else {
                    Program.MachineStatuses.Remove(machineStatusCount);
                    Program.MachineStatuses.Add(new MachineStatus() { MachineName = machineName.MachineName, IsRunning = false });
                }

                GlobalFunctions.WriteLogFile($"Machine {machineName.MachineName} not Connected " + GlobalFunctions.GetErrMsg(ex)); 
            }

            //Write To DbQuery
            ExportSettingList? exportSettingList;
            exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();
            

            if (exportSettingList != null && exportSettingList.EnableDbExport) {
                Program.MachinesData.Where(a => a.MachineName == machineName.MachineName).ToList().ForEach(x => {
                    List<MachineVariableList> machineVariableList;
                    machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == x.MachineName).ToList();
                    
                    foreach (var kvp in x.LastData) {
                        foreach (var kvk in x.PreviousData) {
                            if (kvk.Key == kvp.Key && kvk.Value.ToString() != kvp.Value.ToString()) {
                                //DO INSERT or UPDATE
                                var variable = machineVariableList.Where(a => a.VariableName == kvp.Key).FirstOrDefault();
                                
                                if (variable?.DbRequestType == "Insert") {
                                    Record rec = new() {
                                        Processed = false, MachineName = machineName.MachineName,
                                        RecordType = RecordType.Insert, ValueName = kvp.Key, Value = kvp.Value.ToString(),
                                        InsertMachineNameColumnName = variable.InsertMachineNameColumnName,
                                        InsertTableName = variable.InsertTableName,
                                        InsertVariableNameColumnName = variable.InsertVariableNameColumnName,
                                        InsertVariableValueColumnName = variable.InsertVariableValueColumnName,
                                        InsertTimeStampColumnName = variable.InsertTimeStampColumnName,
                                        TimeStamp = x.TimeStamp
                                        //UpdateTableName = variable.UpdateTableName,
                                        //UpdateVariablePkColumnName = variable.UpdateVariablePkColumnName,
                                        //UpdateVariablePkColumnValue = variable.UpdateVariablePkColumnValue,
                                        //UpdateVariableValueColumnName = variable.UpdateVariableValueColumnName,
                                        //UpdateTimeStampColumnName = variable.UpdateTimeStampColumnName
                                    };
                                    Program.ConnectionPool.TargetDbQuery.Add(rec);
                                } else if(variable?.DbRequestType == "Update") {
                                    Record rec = new() {
                                        Processed = false,
                                        MachineName = machineName.MachineName,
                                        RecordType = RecordType.Update,
                                        ValueName = kvp.Key,
                                        Value = kvp.Value.ToString(),
                                        //InsertMachineNameColumnName = variable.InsertMachineNameColumnName,
                                        //InsertTableName = variable.InsertTableName,
                                        //InsertVariableNameColumnName = variable.InsertVariableNameColumnName,
                                        //InsertVariableValueColumnName = variable.InsertVariableValueColumnName,
                                        //InsertTimeStampColumnName = variable.InsertTimeStampColumnName,
                                        TimeStamp = x.TimeStamp,
                                        UpdateTableName = variable.UpdateTableName,
                                        UpdateVariablePkColumnName = variable.UpdateVariablePkColumnName,
                                        UpdateVariablePkColumnValue = variable.UpdateVariablePkColumnValue,
                                        UpdateVariableValueColumnName = variable.UpdateVariableValueColumnName,
                                        UpdateTimeStampColumnName = variable.UpdateTimeStampColumnName
                                    };
                                    Program.ConnectionPool.TargetDbQuery.Add(rec);
                                }
                            }
                        }
                    }
                });
            }
            //WriteTo DbQuery End
        }
    }
}

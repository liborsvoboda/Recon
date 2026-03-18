using Newtonsoft.Json;
using Opc.UaFx;
using Opc.UaFx.Client;
using System.Collections.Immutable;

namespace Recon.Services
{
    public class MachineLoaderService : BackgroundService
    {
        private readonly ILogger<MachineLoaderService> _logger;
        private static PeriodicTimer timer;

        public MachineLoaderService(ILogger<MachineLoaderService> logger) { _logger = logger; }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            timer = new PeriodicTimer(TimeSpan.FromMilliseconds(double.Parse(Program.Settings.SettingData.GetValueOrDefault("machinesLoadInterval"))));

            try {
                while (await timer.WaitForNextTickAsync() && true) {

                    List<MachineList> machineList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = IsolationLevel.ReadUncommitted })) { machineList = new ReconContext().MachineLists.ToList(); }

                    machineList.ForEach(machine => {


                        var client = new OpcClient(machine.Connection);
                        try { client.Connect(); } catch (Exception ex) { GlobalFunctions.WriteLogFile($"Machine {machine.MachineName} not Connected " + GlobalFunctions.GetErrMsg(ex)); }

                        //List<string> jsonData = JsonConvert.DeserializeObject<List<string>>(machine.MachineVariables);
                        //List<OpcReadNode> nodeData = new List<OpcReadNode>();
                        //jsonData?.ForEach(node => {
                        //    nodeData.Add(new OpcReadNode($"ns=2;s=Machine1.{node}"));

                        //    var machineData = Program.MachinesData.Where(a => a.MachineName == machine.MachineName).FirstOrDefault();
                        //    if (machineData == null) { machineData = new();
                        //        machineData.MachineName = machine.MachineName;
                        //        //ImmutableDictionary<string, object> variable = new Dictionary<string, object> { { node, 0 } }.ToImmutableDictionary();
                        //        machineData.LastData.Add(node, 0);
                        //    } else { }
                        //});

                        //var res = client.ReadNodes(nodeData.ToArray());
                        client.Disconnect();


                    });

                }
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Program Exception: " + ex.StackTrace); }

            Debug.WriteLine(DateTime.Now);
            _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
        }
    }
}

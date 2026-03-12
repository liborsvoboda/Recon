using Opc.UaFx;
using Opc.UaFx.Client;

namespace Recon.Controllers {


    [AllowAnonymous]
    [Route("OpcClientService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class OpcClientService : ControllerBase {

        [HttpGet("/OpcClientService/GetOPCClient")]
        public async Task<IActionResult> GetOPCClient() {
            try
            {
                var client = new OpcClient("opc.tcp://172.20.4.11:48010");
                try
                {
                    client.Connect();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(GlobalFunctions.GetErrMsg(ex));
                }

                OpcReadNode[] rCommands = new OpcReadNode[] {
                    new OpcReadNode("ns=2;s=Machines_definitions.COM_ALIVE"),
                    new OpcReadNode("ns=2;s=Machine1.SERIAL_NUMBER")
                };
                var res = client.ReadNodes(rCommands);
                client.Disconnect();
                return base.Ok(new Classes.JsonResult() { Result = String.Empty, Status = Classes.DBResult.success.ToString() });
                
            }
            catch (Exception ex) {
                return base.Ok(new Classes.JsonResult() { Result = GlobalFunctions.GetErrMsg(ex), Status = DBResult.error.ToString(), ErrorMessage = GlobalFunctions.GetErrMsg(ex) });
            }

        }


    }
}

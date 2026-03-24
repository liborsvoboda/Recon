using Azure;
using Microsoft.OpenApi;
using Opc.UaFx;
using Opc.UaFx.Client;
using System.Net;
using System.Text.Json.Serialization;
using System.Xml;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Recon.Controllers {


    [AllowAnonymous]
    [Route("XmlService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class XmlService : ControllerBase {

        [HttpGet("/XmlService/GetFullData")]
        [Produces("application/xml")]
        public async Task<IActionResult> GetFullData() {
            List<MachineData> data = Program.MachinesData;
            List<UpdateMachineData> updateData = new List<UpdateMachineData>();
            try {
                data.ForEach(x => {
                    UpdateMachineData updateMachineData = new UpdateMachineData();
                    updateMachineData.MachineName = x.MachineName;
                    updateMachineData.TimeStamp = x.TimeStamp;
                    foreach (var kvp in x.LastData) { updateMachineData.Data.Add(kvp.Key, kvp.Value); }
                     updateData.Add(updateMachineData); 
                });

                return Ok(updateData);

            } catch (Exception ex) {
                return Ok(updateData);
            }

        }


        [HttpGet("/XmlService/GetUpdateData")]
        [Produces("application/xml")]
        public async Task<IActionResult> GetUpdateData() {
            List<MachineData> data = Program.MachinesData;
            List<UpdateMachineData> updateData = new List<UpdateMachineData>();
            try {
                
                data.ForEach(x => {
                    UpdateMachineData updateMachineData = new UpdateMachineData();
                    updateMachineData.MachineName = x.MachineName;
                    updateMachineData.TimeStamp = x.TimeStamp;

                    foreach (var kvp in x.LastData) {
                        foreach (var kvk in x.PreviousData) { 
                            if (kvk.Key == kvp.Key && kvk.Value.ToString() != kvp.Value.ToString()) { 
                                updateMachineData.Data.Add(kvp.Key, kvp.Value);break; 
                            } 
                        }
                    }
                    
                    if (updateMachineData.Data.Count > 0) { updateData.Add(updateMachineData); }
                });

                return Ok(updateData);
            } catch (Exception ex) {
                return Ok(updateData);
            }
        }
    }
}

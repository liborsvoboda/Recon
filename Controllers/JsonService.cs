using System.Text.Json.Serialization;

namespace Recon.Controllers {


    [AllowAnonymous]
    [Route("JsonService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class JsonService : ControllerBase {

        [HttpGet("/JsonService/GetFullData")]
        public async Task<string> GetFullData() {
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

                return JsonSerializer.Serialize(updateData, new JsonSerializerOptions() { 
                    ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, 
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(updateData, new JsonSerializerOptions() { 
                    ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, 
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }

        }


        [HttpGet("/JsonService/GetUpdateData")]
        public async Task<string> GetUpdateData() {
            List<MachineData> data = Program.MachinesData;
            try {
                List<UpdateMachineData> updateData = new List<UpdateMachineData>();
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

                return JsonSerializer.Serialize(updateData, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) {
                return JsonSerializer.Serialize(data, new JsonSerializerOptions() {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            }
        }
    }
}

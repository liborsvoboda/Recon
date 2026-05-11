using System.Net.Sockets;
using System.Text.Json.Serialization;

namespace Recon.Controllers {

    [Route("MachineService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class MachineService : ControllerBase {

        [AllowAnonymous]
        [HttpGet("/MachineService/MachineStatuses")]
        public async Task<string> GetFullData() {
            return JsonSerializer.Serialize(Program.MachineStatuses, new JsonSerializerOptions() {
                ReferenceHandler = ReferenceHandler.IgnoreCycles,
                WriteIndented = true,
                //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            });
        }


        [Authorize]
        [HttpGet("/MachineService/SetVariables/{machine}")]
        public async Task<IActionResult> SetVariables(string machine) {
            try {

                var existingVariables = new ReconContext().MachineVariableLists.Where(a => a.MachineName == machine).ToList();
                var variables = new ReconContext().VariableLists.ToList();

                variables.ForEach(async variable => {
                    if (existingVariables.Where(a => a.VariableName == variable.Name).Count() == 0) {
                        MachineVariableList record = new() { 
                            MachineName = machine, TimeStamp = DateTime.Now, DbRequestType = "Insert",VariableName= variable.Name,
                            InsertTableName = "OpcUaInsertTable", InsertMachineNameColumnName = "MachineName", InsertVariableNameColumnName = "VariableName",
                            InsertVariableValueColumnName = "VariableValue", InsertTimeStampColumnName = "TimeStamp",
                            UpdateTableName= string.Empty, UpdateVariablePkColumnName = string.Empty, UpdateVariablePkColumnValue = string.Empty,
                            UpdateVariableValueColumnName = string.Empty, UpdateTimeStampColumnName = string.Empty, UserId = (int)HttpContextExtension.GetUserId()
                        };
                        new ReconContext().Database.ExecuteSqlRaw("PRAGMA busy_timeout=5000;");
                        var data = new ReconContext().MachineVariableLists.Add(record);
                        int result = await data.Context.SaveChangesAsync();
                    }
                });

                return base.Ok(new Classes.JsonResult() { Result = String.Empty, Status = DBResult.success.ToString() });
            }
            catch (Exception ex) {
                return base.Ok(new Classes.JsonResult() { Result = GlobalFunctions.GetErrMsg(ex), Status = DBResult.error.ToString(), ErrorMessage = GlobalFunctions.GetErrMsg(ex) });
            }

        }
    }
}

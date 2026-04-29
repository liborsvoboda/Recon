

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("MachineVariableList")]
    public class MachineVariableListApi : ControllerBase {

        [HttpGet("/MachineVariableList/GetMachineVariableList")]
        public async Task<string> GetMachineVariableList() {
            List<MachineVariableList> data;
            data = new ReconContext().MachineVariableLists.ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/MachineVariableList/GetMachineVariableListByFilter/Filter/{filter}")]
        public async Task<string> GetMachineVariableListByFilter(string filter) {
            List<MachineVariableList> data;
            data = new ReconContext().MachineVariableLists.FromSqlRaw("SELECT * FROM MachineVariableList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/MachineVariableList/GetMachineVariableListKey/{id}")]
        public async Task<string> GetMachineVariableListKey(int id) {
            MachineVariableList data;
            data = new ReconContext().MachineVariableLists.Where(a => a.Id == id).First();

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/MachineVariableList/InsertMachineVariableList")]
        [Consumes("application/json")]
        public async Task<string> InsertMachineVariableList([FromBody] MachineVariableList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().MachineVariableLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/MachineVariableList/UpdateMachineVariableList")]
        [Consumes("application/json")]
        public async Task<string> UpdateMachineVariableList([FromBody] MachineVariableList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().MachineVariableLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/MachineVariableList/DeleteMachineVariableList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteMachineVariableList(string id) {
            try
            {

                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                MachineVariableList record = new ReconContext().MachineVariableLists.Where(a => a.Id == int.Parse(id)).First();

                var data = new ReconContext().MachineVariableLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            }
            catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}
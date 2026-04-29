

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("MachineList")]
    public class MachineListApi : ControllerBase {

        [HttpGet("/MachineList/GetMachineList")]
        public async Task<string> GetMachineList() {
            List<MachineList> data;
            data = new ReconContext().MachineLists.ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/MachineList/GetMachineListByFilter/Filter/{filter}")]
        public async Task<string> GetMachineListByFilter(string filter) {
            List<MachineList> data;
            data = new ReconContext().MachineLists.FromSqlRaw("SELECT * FROM MachineList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/MachineList/GetMachineListKey/{id}")]
        public async Task<string> GetMachineListKey(int id) {
            MachineList data;
            data = new ReconContext().MachineLists.Where(a => a.Id == id).First();

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/MachineList/InsertMachineList")]
        [Consumes("application/json")]
        public async Task<string> InsertMachineList([FromBody] MachineList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().MachineLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/MachineList/UpdateMachineList")]
        [Consumes("application/json")]
        public async Task<string> UpdateMachineList([FromBody] MachineList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().MachineLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/MachineList/DeleteMachineList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteMachineList(string id) {
            try {

                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                MachineList record = new ReconContext().MachineLists.Where(a => a.Id == int.Parse(id)).First();

                var data = new ReconContext().MachineLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}


namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("ExportSettingList")]
    public class ExportSettingListApi : ControllerBase {

        [HttpGet("/ExportSettingList/GetExportSettingList")]
        public async Task<string> GetExportSettingList() {
            List<ExportSettingList> data;
            data = new ReconContext().ExportSettingLists.ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ExportSettingList/GetExportSettingListByFilter/Filter/{filter}")]
        public async Task<string> GetExportSettingListByFilter(string filter) {
            List<ExportSettingList> data;
            data = new ReconContext().ExportSettingLists.FromSqlRaw("SELECT * FROM ExportSettingList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/ExportSettingList/GetExportSettingListKey/{id}")]
        public async Task<string> GetExportSettingListKey(int id) {
            ExportSettingList data;
            data = new ReconContext().ExportSettingLists.Where(a => a.Id == id).First();

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/ExportSettingList/InsertExportSettingList")]
        [Consumes("application/json")]
        public async Task<string> InsertExportSettingList([FromBody] ExportSettingList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().ExportSettingLists.Add(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpPost("/ExportSettingList/UpdateExportSettingList")]
        [Consumes("application/json")]
        public async Task<string> UpdateExportSettingList([FromBody] ExportSettingList record) {
            try {
                record.TimeStamp = DateTime.Now;
                var data = new ReconContext().ExportSettingLists.Update(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });

            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }

        [HttpDelete("/ExportSettingList/DeleteExportSettingList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteExportSettingList(string id) {
            try {

                if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                ExportSettingList record = new ReconContext().ExportSettingLists.Where(a => a.Id == int.Parse(id)).First();

                var data = new ReconContext().ExportSettingLists.Remove(record);
                int result = await data.Context.SaveChangesAsync();
                if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
        }
    }
}
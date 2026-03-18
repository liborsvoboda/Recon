

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("DatabaseVariableTypeList")]
    public class DatabaseVariableTypeListApi : ControllerBase {

        [HttpGet("/DatabaseVariableTypeList/GetDatabaseVariableTypeList")]
        public async Task<string> GetDatabaseVariableTypeList() {
            List<DatabaseVariableTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ReconContext().DatabaseVariableTypeLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/DatabaseVariableTypeList/GetDatabaseVariableTypeListByFilter/Filter/{filter}")]
        public async Task<string> GetDatabaseVariableTypeListByFilter(string filter) {
            List<DatabaseVariableTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ReconContext().DatabaseVariableTypeLists.FromSqlRaw("SELECT * FROM DatabaseVariableTypeList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/DatabaseVariableTypeList/GetDatabaseVariableTypeListKey/{id}")]
        public async Task<string> GetDatabaseVariableTypeListKey(int id) {
            DatabaseVariableTypeList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new ReconContext().DatabaseVariableTypeLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/DatabaseVariableTypeList/InsertDatabaseVariableTypeList")]
        [Consumes("application/json")]
        public async Task<string> InsertDatabaseVariableTypeList([FromBody] DatabaseVariableTypeList record) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().DatabaseVariableTypeLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpPost("/DatabaseVariableTypeList/UpdateDatabaseVariableTypeList")]
        [Consumes("application/json")]
        public async Task<string> UpdateDatabaseVariableTypeList([FromBody] DatabaseVariableTypeList record) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().DatabaseVariableTypeLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpDelete("/DatabaseVariableTypeList/DeleteDatabaseVariableTypeList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteDatabaseVariableTypeList(string id) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    DatabaseVariableTypeList record = new ReconContext().DatabaseVariableTypeLists.Where(a => a.Id == int.Parse(id)).First();

                    var data = new ReconContext().DatabaseVariableTypeLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}
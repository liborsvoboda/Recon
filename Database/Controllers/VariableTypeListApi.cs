

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("VariableTypeList")]
    public class VariableTypeListApi : ControllerBase {

        [HttpGet("/VariableTypeList/GetVariableTypeList")]
        public async Task<string> GetVariableTypeList() {
            List<VariableTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ReconContext().VariableTypeLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/VariableTypeList/GetVariableTypeListByFilter/Filter/{filter}")]
        public async Task<string> GetVariableTypeListByFilter(string filter) {
            List<VariableTypeList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ReconContext().VariableTypeLists.FromSqlRaw("SELECT * FROM VariableTypeList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/VariableTypeList/GetVariableTypeListKey/{id}")]
        public async Task<string> GetVariableTypeListKey(int id) {
            VariableTypeList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new ReconContext().VariableTypeLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/VariableTypeList/InsertVariableTypeList")]
        [Consumes("application/json")]
        public async Task<string> InsertVariableTypeList([FromBody] VariableTypeList record) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().VariableTypeLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpPost("/VariableTypeList/UpdateVariableTypeList")]
        [Consumes("application/json")]
        public async Task<string> UpdateVariableTypeList([FromBody] VariableTypeList record) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().VariableTypeLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpDelete("/VariableTypeList/DeleteVariableTypeList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteVariableTypeList(string id) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    VariableTypeList record = new ReconContext().VariableTypeLists.Where(a => a.Id == int.Parse(id)).First();

                    var data = new ReconContext().VariableTypeLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}
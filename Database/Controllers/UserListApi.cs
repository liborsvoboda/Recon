

namespace EasyITCenter.Controllers {

    [Authorize]
    [ApiController]
    [Route("UserList")]
    public class UserListApi : ControllerBase {

        [HttpGet("/UserList/GetUserList")]
        public async Task<string> GetUserList() {
            List<UserList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ScaffoldContext().UserLists.ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/UserList/GetUserListByFilter/Filter/{filter}")]
        public async Task<string> GetUserListByFilter(string filter) {
            List<UserList> data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted //with NO LOCK
            })) {
                data = new ReconContext().UserLists.FromSqlRaw("SELECT * FROM SolutionLanguageList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/UserList/GetUserListKey/{id}")]
        public async Task<string> GetUserListKey(int id) {
            UserList data;
            using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions {
                IsolationLevel = IsolationLevel.ReadUncommitted
            })) {
                data = new ReconContext().UserLists.Where(a => a.Id == id).First();
            }

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/UserList/InsertUserList")]
        [Consumes("application/json")]
        public async Task<string> InsertUserList([FromBody] UserList record) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().UserLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpPost("/UserList/UpdateUserLists")]
        [Consumes("application/json")]
        public async Task<string> UpdateUserLists([FromBody] UserList record) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    var data = new ReconContext().UserLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpDelete("/UserList/DeleteUserList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteUserList(string id) {
            try {
                if (HtttpContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    UserList record = new() { Id = int.Parse(id) };

                    var data = new ReconContext().UserLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}


namespace EasyITCenter.Controllers {

    [AllowAnonymous]
    [ApiController]
    [Route("UserRoleList")]
    public class UserRoleListApi : ControllerBase {

        [HttpGet("/UserRoleList/GetUserRoleList")]
        public async Task<string> GetUserRoleList() {
            List<UserRoleList> data;
            data = new ReconContext().UserRoleLists.ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/UserRoleList/GetUserRoleListByFilter/Filter/{filter}")]
        public async Task<string> GetUserRoleListByFilter(string filter) {
            List<UserRoleList> data;
            data = new ReconContext().UserRoleLists.FromSqlRaw("SELECT * FROM UserRoleList WHERE 1=1 AND " + filter.Replace("+", " ")).AsNoTracking().ToList();

            return JsonSerializer.Serialize(data);
        }

        [HttpGet("/UserRoleList/GetUserRoleListKey/{id}")]
        public async Task<string> GetUserRoleListKey(int id) {
            UserRoleList data;
            data = new ReconContext().UserRoleLists.Where(a => a.Id == id).First();

            return JsonSerializer.Serialize(data);
        }

        [HttpPut("/UserRoleList/InsertUserRoleList")]
        [Consumes("application/json")]
        public async Task<string> InsertUserRoleList([FromBody] UserRoleList record) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    record.TimeStamp = DateTime.Now;
                    var data = new ReconContext().UserRoleLists.Add(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpPost("/UserRoleList/UpdateUserRoleList")]
        [Consumes("application/json")]
        public async Task<string> UpdateUserRoleList([FromBody] UserRoleList record) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    record.TimeStamp = DateTime.Now;
                    var data = new ReconContext().UserRoleLists.Update(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }

        [HttpDelete("/UserRoleList/DeleteUserRoleList/{id}")]
        [Consumes("application/json")]
        public async Task<string> DeleteUserRoleList(string id) {
            try {
                if (HttpContextExtension.IsAdmin()) {
                    if (!int.TryParse(id, out int Ids)) return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = "Id is not set" });

                    UserRoleList record = new ReconContext().UserRoleLists.Where(a => a.Id == int.Parse(id)).First();

                    var data = new ReconContext().UserRoleLists.Remove(record);
                    int result = await data.Context.SaveChangesAsync();
                    if (result > 0) return JsonSerializer.Serialize(new ResultMessage() { InsertedId = record.Id, Status = DBResult.success.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                    else return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = result, ErrorMessage = string.Empty });
                }
            } catch (Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = DBResult.DeniedYouAreNotAdmin.ToString() });
        }
    }
}
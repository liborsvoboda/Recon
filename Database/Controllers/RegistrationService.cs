using ServerCorePages;

namespace EasyITCenter.Controllers {



    public class EmailVerification {
        public string EmailAddress { get; set; } = null;
        public string Username { get; set; } = null;
    }


    public class WebRegistration {
        public string FirstName { get; set; } = null;
        public string Surname { get; set; } = null;
        public string Username { get; set; } = null;
        public string EmailAddress { get; set; } = null;
        public string Password { get; set; } = null;
    }


    public class UserProfile {
        public string FirstName { get; set; } = null;
        public string Surname { get; set; } = null;
        public string Username { get; set; } = null;
        public string EmailAddress { get; set; } = null;
        public string? Password { get; set; }
    }


    [ApiController]
    [Route("/RegistrationService")]
     //[ApiExplorerSettings(IgnoreApi = true)]
    public class RegistrationService : ControllerBase {


        [AllowAnonymous]
        [HttpPost("/RegistrationService/Registration")]
        [Consumes("application/json")]
        public async Task<string> Registration([FromBody] WebRegistration webRegistration) {
            ReconContext data = new ReconContext();
            try { //check username exist
                int count;
                count = new ReconContext().UserLists.Where(a => a.UserName == webRegistration.Username).Count();
                if (count > 0) {
                    return JsonSerializer.Serialize(new ResultMessage() { Status = DBWebApiResponses.userNameExist.ToString(), ErrorMessage = String.Empty });
                }
                
                UserList origUser = new();
                origUser = new ReconContext().UserLists.Where(a => a.UserName == webRegistration.EmailAddress).FirstOrDefault();
                if (origUser == null) {
                    origUser = new() { RoleName = "user", UserName = webRegistration.Username, Password = BCrypt.Net.BCrypt.HashPassword(webRegistration.Password), Name = webRegistration.FirstName, 
                        Surname = webRegistration.Surname, Email = webRegistration.EmailAddress, TimeStamp = DateTime.Now
                    };
                    
                    DatabaseContextExtensions.RunTransaction(data, (trans) => {
                        data.UserLists.Add(origUser);
                        data.SaveChanges();
                        return true;
                    });
                }

                 return JsonSerializer.Serialize(new ResultMessage() { InsertedId = origUser.Id, Status = DBWebApiResponses.success.ToString(), RecordCount = 1, ErrorMessage = String.Empty });
            } 
            catch(Exception ex) { return JsonSerializer.Serialize(new ResultMessage() { Status = DBResult.error.ToString(), RecordCount = 0, ErrorMessage = GlobalFunctions.GetUserApiErrMessage(ex) }); }
            
        }
    }
}
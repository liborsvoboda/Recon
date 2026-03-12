namespace Recon.Classes
{
    public class JsonResult
    {
        public string Status { get; set; }
        public object Result { get; set; }
        public string ErrorMessage { get; set; }
    }


    public enum DBResult
    {
        success,
        error,
        DeniedYouAreNotAdmin,
        UnauthorizedRequest
    }


    public enum DBWebApiResponses
    {
        emailExist,
        emailNotExist,
        loginInfoSentToEmail,
        userNameExist,
        success
    }

    public class ResultMessage
    {
        public int InsertedId { get; set; } = 0;
        public string Status { get; set; }
        public int RecordCount { get; set; }
        public string ErrorMessage { get; set; }
        public string Result { get; set; } = String.Empty;
    }


    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string? Token { get; set; }
        public string Email { get; set; }
        public string? Message { get; set; }
        public DateTime? Expiration { get; set; }
        public string Role { get; set; }
        public string Username { get; set; }
    }


    public class ServerWebPagesToken
    {
        public Dictionary<string, string> Data { get; set; }
        public ClaimsPrincipal? UserClaims { get; set; } = null;
        public SecurityToken? Token { get; set; } = null;
        public string? stringToken { get; set; } = null;
        public bool IsValid { get; set; } = false;
        public string userRole { get; set; } = null;
    }
}

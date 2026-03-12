using System.Data;

namespace Recon.Functions
{
    public class GlobalFunctions
    {

        /// <summary>
        /// Mined-ed Error Message For System Save to Database For Simple Solving Problem
        /// </summary>
        /// <param name="exception"></param>
        /// <param name="msgCount"> </param>
        /// <returns></returns>
        public static string GetErrMsg(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount, (exception.TargetSite?.ReflectedType?.FullName + Environment.NewLine
                + exception.Message + Environment.NewLine + exception.StackTrace + Environment.NewLine),
                GetErrMsg(exception.InnerException, ++msgCount)) : string.Empty;
        }


        public static string GetUserApiErrMessage(Exception exception, int msgCount = 1) {
            return exception != null ? string.Format("{0}: {1}\n{2}", msgCount,
                exception.TargetSite?.ReflectedType?.FullName + Environment.NewLine + exception.Message,
                GetUserApiErrMessage(exception.InnerException, ++msgCount)) : string.Empty;
        }

        public static List<object> ConvertTableToClassListByType(DataTable dt, Type classType) {
            List<object> result = new List<object>();
            try {
                foreach (DataRow dr in dt.Rows) {
                    var typeObject = Activator.CreateInstance(classType);
                    foreach (var fieldInfo in classType.GetProperties()) {
                        foreach (DataColumn dc in dt.Columns) {
                            if (fieldInfo.Name == dc.ColumnName) { fieldInfo.SetValue(typeObject, dr[dc.ColumnName]); break; }
                        }
                    }
                    result.Add(typeObject);
                }
            } catch { }
            return result;
        }


        public static List<T> GenericConvertTableToClassList<T>(DataTable dt)
        {
            List<T> result = new List<T>();
            try
            {
                foreach (DataRow dr in dt.Rows)
                {
                    var typeObject = Activator.CreateInstance<T>();
                    foreach (var fieldInfo in typeof(T).GetProperties())
                    {
                        foreach (DataColumn dc in dt.Columns)
                        {
                            if (fieldInfo.Name == dc.ColumnName) { fieldInfo.SetValue(typeObject, dr[dc.ColumnName].GetType().FullName == typeof(System.DBNull).FullName ? null : dr[dc.ColumnName]); break; }
                        }
                    }
                    ; result.Add(typeObject);
                }
                ;
            }
            catch (Exception ex) { }
            return result;
        }



        public static HttpContext IncludeCookieTokenToRequest(HttpContext context)
        {
            ServerWebPagesToken? serverWebPagesToken = null;
            string token = context.Request.Cookies.FirstOrDefault(a => a.Key == "ApiToken").Value;

            if (token == null && context.Request.Headers.Authorization.ToString().Length > 0) { token = context.Request.Headers.Authorization.ToString().Substring(7); }
            if (token != null)
            {
                serverWebPagesToken = CheckTokenValidityFromString(token);
                if (serverWebPagesToken.IsValid)
                {
                    context.User.AddIdentities(serverWebPagesToken.UserClaims.Identities);
                    try { context.Items.Add(new KeyValuePair<object, object>("ServerWebPagesToken", serverWebPagesToken)); } catch { }
                }
            }
            return context;
        }


        public static ServerWebPagesToken CheckTokenValidityFromString(string tokenString)
        {
            try
            {
                JwtSecurityTokenHandler? tokenForChek = new JwtSecurityTokenHandler();
                ClaimsPrincipal userClaims = tokenForChek.ValidateToken(tokenString, ValidAndGetTokenParameters(), out SecurityToken refreshedToken);
                ServerWebPagesToken validation = new() { Data = new() { { "Token", tokenString } }, UserClaims = userClaims, stringToken = tokenString, Token = refreshedToken, IsValid = refreshedToken != null, userRole = userClaims.FindFirstValue(ClaimTypes.Role) };
                return validation;
            }
            catch { }
            return new ServerWebPagesToken();
        }



        public static TokenValidationParameters ValidAndGetTokenParameters()
        {
            return new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("bKL6gfp5Web3hHtcc6zIxdGOBBRjWeq6aRbANU8nbbKL6gfp5Web3hHtcc6zIxdGOBBRjWeq6aRbANU8nb")),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = false,
                ClockSkew = TimeSpan.FromMinutes(15),
            };
        }
    }
}

using Newtonsoft.Json;
using System.Collections.Immutable;
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


        public static void WriteLogFile(string message) {
            string log = string.Empty;
            try {
                log = File.ReadAllText(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "datalog.txt"));
            } catch (Exception ex) { }
            try {
                File.WriteAllText(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "datalog.txt"), DateTimeOffset.Now.DateTime.ToUniversalTime().ToString() + ": " + message + Environment.NewLine + (log.Length > 1000000 ? log.Substring(0, 1000000) : log));
            } catch (Exception ex) { }
        }


        public static ImmutableDictionary<string, string> LoadSetting() {
            
            string json = File.ReadAllText(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "config.json"), FileDetectEncoding(Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "Data", "config.json")));
            return JsonConvert.DeserializeObject<ImmutableDictionary<string, string>>(json);
        }


        public static Encoding FileDetectEncoding(string FileName)
        {
            string enc = "";
            if (File.Exists(FileName))
            {
                FileStream filein = new FileStream(FileName, FileMode.Open, FileAccess.Read);
                if ((filein.CanSeek))
                {
                    byte[] bom = new byte[5];
                    filein.Read(bom, 0, 4);
                    // EF BB BF = utf-8 FF FE = ucs-2le, ucs-4le, and ucs-16le FE FF = utf-16 and
                    // ucs-2 00 00 FE FF = ucs-4
                    if ((((bom[0] == 0xEF) && (bom[1] == 0xBB) && (bom[2] == 0xBF)) || ((bom[0] == 0xFF) && (bom[1] == 0xFE)) || ((bom[0] == 0xFE) && (bom[1] == 0xFF)) || ((bom[0] == 0x0) && (bom[1] == 0x0) && (bom[2] == 0xFE) && (bom[3] == 0xFF))))
                        enc = "Unicode";
                    else
                        enc = "ASCII";
                    // Position the file cursor back to the start of the file
                    filein.Seek(0, SeekOrigin.Begin);
                }
                filein.Close();
            }
            if (enc == "Unicode")
                return Encoding.UTF8;
            else
                return Encoding.Default;
        }
    }
}

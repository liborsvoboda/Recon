
namespace EasyITCenter.Controllers {

    [ApiController]
    [Route("AuthenticationService")]
    public class AuthenticationService : ControllerBase {
        private static Encoding ISO_8859_1_ENCODING = Encoding.GetEncoding("ISO-8859-1");

        [AllowAnonymous]
        [HttpPost("/AuthenticationService")]
        public IActionResult Authenticate([FromHeader] string Authorization) {
            (string? username, string? password) = GetUsernameAndPasswordFromAuthorizeHeader(Authorization);
            AuthenticateResponse? user = Authenticate(username, password);
            
            if (!string.IsNullOrWhiteSpace(user?.Message)) { return Ok(JsonSerializer.Serialize(user)); 
            } else if (user == null) { { return BadRequest(new { message = "UsernameOrPasswordIncorrect" }); }; }

            
            user.Expiration = null;

            RefreshUserToken(username, user);
            return Ok(JsonSerializer.Serialize(user));
        }

        private static (string?, string?) GetUsernameAndPasswordFromAuthorizeHeader(string authorizeHeader) {
            if (authorizeHeader == null || (!authorizeHeader.Contains("Basic ") && !authorizeHeader.Contains("Bearer "))) return (null, null);

            if (authorizeHeader.Contains("Basic ")) {
                string encodedUsernamePassword = authorizeHeader.Substring("Basic ".Length).Trim();
                string usernamePassword = ISO_8859_1_ENCODING.GetString(Convert.FromBase64String(encodedUsernamePassword));

                string username = usernamePassword.Split(':')[0];
                string password = usernamePassword.Split(':')[1];

                return (username, password);
            }

            return (null, null);
        }


        /// <summary>
        /// API Authenticated and Generate Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public static AuthenticateResponse? Authenticate(string? username, string? password) {
            SecurityToken? token = null; string? errorMessage = null;
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("bKL6gfp5Web3hHtcc6zIxdGOBBRjWeq6aRbANU8nbbKL6gfp5Web3hHtcc6zIxdGOBBRjWeq6aRbANU8nb");


            if (username == null) { return null; }
            var user = new ReconContext().UserLists
                .Where(a => a.UserName == username).FirstOrDefault();
            if (user != null) user = BCrypt.Net.BCrypt.Verify(password, user.Password) ? user : null;
            if (user == null) { return null; }
                
            try {
               
                var tokenDescriptor = new SecurityTokenDescriptor {
                    Subject = new ClaimsIdentity(new Claim[] {

                    new Claim(ClaimTypes.PrimarySid, user.Id.ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, user.RoleName.ToLower())
                }),
                    CompressionAlgorithm = CompressionAlgorithms.Deflate,
                    Issuer = user.UserName,
                    TokenType = "JWT",
                    IssuedAt = DateTimeOffset.Now.DateTime,
                    NotBefore = DateTimeOffset.Now.DateTime,
                    Expires = DateTimeOffset.Now.AddMinutes(15).DateTime,
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), ( SecurityAlgorithms.HmacSha512 ))
                };                token = tokenHandler.CreateToken(tokenDescriptor);
            } catch (Exception ex) { errorMessage = GlobalFunctions.GetErrMsg(ex); }

            AuthenticateResponse authResponse = new() 
            { Id = user.Id, Name = user.Name, SurName = user.Surname, Token = token == null ? string.Empty : tokenHandler.WriteToken(token), 
                /*Email = user.Email,*/ Message = !string.IsNullOrWhiteSpace(errorMessage) ? $"Token Generation Error, Check {errorMessage}" : "",
                Expiration = token?.ValidTo.ToLocalTime(), Role = user.RoleName.ToLower(),
                Username = user.UserName
            };
            return authResponse;
            
        }

        /// <summary>
        /// API Refresh User Token
        /// </summary>
        /// <param name="username"></param>
        /// <param name="token">   </param>
        /// <returns></returns>
        public static bool RefreshUserToken(string username, AuthenticateResponse token) {
            try {
                return true; 
            } catch (Exception ex) { }
            return false;
        }


        /// <summary>
        /// API Token LifeTime Validator
        /// </summary>
        /// <param name="notBefore"></param>
        /// <param name="expires">  </param>
        /// <param name="token">    </param>
        /// <param name="params">   </param>
        /// <returns></returns>
        internal static bool TokenLifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken token, TokenValidationParameters @params) {
            if (RefreshUserToken(token.Issuer, new AuthenticateResponse() {
                Token = ((JwtSecurityToken)token).RawData.ToString(),
                Expiration = DateTimeOffset.Now.AddMinutes(15).DateTime
            })) { return true; } else { return false; }
        }
    }
}
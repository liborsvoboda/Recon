

namespace Recon.ServerCoreStructure {

    /// <summary>
    /// Server Communication Extensions for Controlling Data Implmented FullUserTokenData For More
    /// Info Modify Auth Claims And Add Get Info Here
    /// </summary>
    public class HttpContextExtension : IHttpContextAccessor {
        private static IHttpContextAccessor? _accessor = new HttpContextAccessor();

        HttpContext? IHttpContextAccessor.HttpContext { get => _accessor?.HttpContext; set => _accessor.HttpContext = value; }
        public HttpContext? HttpContext { get => _accessor.HttpContext; set => _accessor.HttpContext = value; }


        /// <summary>
        /// Extension for check Admin Role
        /// </summary>
        public static bool IsAdmin() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("admin")) { return false; } else return true;
            } catch { return false; }
        }

        /// <summary>
        /// Extension for check user Role
        /// </summary>
        public static bool IsSystemUser() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("user")) { return false; } else return true;
            } catch { return false; }
        }

        /// <summary>
        /// Extension for check webAdmin Role
        /// </summary>
        public static bool IsWebAdmin() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("webadmin")) { return false; } else return true;
            } catch { return false; }
        }

        /// <summary>
        /// Extension for check webUser Role
        /// </summary>
        public static bool IsWebUser() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null && !context.User.IsInRole("webuser")) { return false; } else return true;
            } catch { return false; }
        }

        /// <summary>
        /// Check HTTP if is the Request is Logged
        /// </summary>
        /// <returns></returns>
        public static bool IsLogged() {
            try {
                var context = _accessor?.HttpContext;
                if (context == null || (context != null && (context.User == null || (context.User != null && context.User.FindFirst(ClaimTypes.NameIdentifier.ToString())?.Value == null)))) { return false; } else return true;
            } catch { return false; }
        }

        /// <summary>
        /// Get UserRole
        /// </summary>
        /// <returns></returns>
        public static string? GetUserRole() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null) { return context.User.FindFirst(ClaimTypes.Role.ToString())?.Value.ToLower(); } else return null;
            } catch { return null; }
        }

        /// <summary>
        /// Get UserId
        /// </summary>
        /// <returns></returns>
        public static int? GetUserId() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null) { return int.Parse(context.User.FindFirst(ClaimTypes.PrimarySid.ToString())?.Value); } else return null;
            } catch { return null; }
        }

        /// <summary>
        /// Get UserName
        /// </summary>
        /// <returns></returns>
        public static string? GetUserName() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null) { return context.User.FindFirst(ClaimTypes.NameIdentifier.ToString())?.Value; } else return null;
            } catch { return null; }
        }

        /// <summary>
        /// Get User Email
        /// </summary>
        /// <returns></returns>
        public static string? GetUserEmail() {
            try {
                var context = _accessor?.HttpContext;
                if (context != null && context.User != null) { return context.User.FindFirst(ClaimTypes.Email.ToString())?.Value; } else return null;
            } catch { return null; }
        }

    }
}
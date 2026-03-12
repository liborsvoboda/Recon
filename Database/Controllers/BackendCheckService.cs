namespace EasyITCenter.Controllers {

    /// <summary>
    /// Simple Api for Checking Avaiability
    /// </summary>
    /// <seealso cref="ControllerBase"/>
    [ApiController]
    [Route("BackendCheckService")]
    public class BackendCheckService : ControllerBase {

        /// <summary>
        /// Gets the backend check API.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/BackendCheckService")]
        public Task<string> GetBackendCheckApi() { return Task.FromResult("ServerRunning"); }


        [HttpGet("/BackendCheckDbService")]
        public Task<string> GetBackendCheckDbApi() {
            if (new ReconContext().Database.CanConnect()) {
                return Task.FromResult("DatabaseIsConnected");
            } else { return Task.FromResult("DatabaseIsNotConnected"); }
        }

    }
}
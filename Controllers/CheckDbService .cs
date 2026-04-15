using Microsoft.Data.SqlClient;
using System.Data;
using System.Text.Json.Serialization;
using JsonResult = Recon.Classes.JsonResult;

namespace Recon.Controllers {


    public class Connection {
        public string ConnectionString { get; set; }
    }


    [AllowAnonymous]
    [Route("CheckDbService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class CheckDbService : ControllerBase {

        [HttpPost("/CheckDbService/CheckMssql")]
        public async Task<string> CheckMssql([FromBody] Connection connection) {
            try {
                SqlConnection cnn = new SqlConnection(connection.ConnectionString);
                cnn.Open();
                if (cnn.State == ConnectionState.Open) {
                    cnn.Close();

                }
                return JsonSerializer.Serialize(new JsonResult() { Status = DBResult.success.ToString(), Result = string.Empty, ErrorMessage = string.Empty }, new JsonSerializerOptions()
                {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            } catch (Exception ex) {

                return JsonSerializer.Serialize(new JsonResult() { Status = DBResult.error.ToString(), Result = "Program Exception: " + ex.StackTrace, ErrorMessage = "Program Exception: " + ex.StackTrace }, new JsonSerializerOptions() { 
                    ReferenceHandler = ReferenceHandler.IgnoreCycles, WriteIndented = true, 
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase });
            }

        }



        [HttpPost("/CheckDbService/CheckMysql")]
        public async Task<string> CheckMysql([FromBody] Connection connection)
        {
            try
            {
                var cnn = new MySql.Data.MySqlClient.MySqlConnection(connection.ConnectionString);
                cnn.Open();
                if (cnn.State == ConnectionState.Open)
                {
                    cnn.Close();

                }
                return JsonSerializer.Serialize(new JsonResult() { Status = DBResult.success.ToString(), Result = string.Empty, ErrorMessage = string.Empty }, new JsonSerializerOptions()
                {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            }
            catch (Exception ex)
            {

                return JsonSerializer.Serialize(new JsonResult() { Status = DBResult.error.ToString(), Result = "Program Exception: " + ex.StackTrace, ErrorMessage = "Program Exception: " + ex.StackTrace }, new JsonSerializerOptions()
                {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true,
                    //DictionaryKeyPolicy = JsonNamingPolicy.CamelCase, 
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                });
            }

        }

    }
}

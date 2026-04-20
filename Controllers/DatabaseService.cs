using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using System.Data;
using System.Text.Json.Serialization;
using JsonResult = Recon.Classes.JsonResult;

namespace Recon.Controllers {


    public class RunMsSqlScriptRequest {
        public string ConnectionString { get; set; }
        public string Script { get; set; }
    }


    [Authorize]
    [Route("DatabaseService")]
    [ApiController]
    //[ApiExplorerSettings(IgnoreApi = true)]
    public class DatabaseService : ControllerBase {

        [HttpPost("/DatabaseService/RunMSSqlScript")]
        public async Task<string> RunMSSqlScript([FromBody] RunMsSqlScriptRequest runMsSqlScriptRequest) {
            try {
                    SqlConnection cnn = new(runMsSqlScriptRequest.ConnectionString);
                    cnn.Open();
                    if (cnn.State == ConnectionState.Open)
                    {
                        DataSet dataTable = new();
                        SqlDataAdapter mDataAdapter = new(new SqlCommand(runMsSqlScriptRequest.Script, cnn));
                        mDataAdapter.Fill(dataTable);
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



        [HttpPost("/DatabaseService/RunMYSqlScript")]
        public async Task<string> RunMYSqlScript([FromBody] RunMsSqlScriptRequest runMsSqlScriptRequest)
        {
            try
            {
                MySqlConnection cnn = new(runMsSqlScriptRequest.ConnectionString);
                cnn.Open();
                if (cnn.State == ConnectionState.Open)
                {
                    DataSet dataTable = new();
                    MySqlCommand comm = cnn.CreateCommand();
                    comm.CommandText = runMsSqlScriptRequest.Script;
                    comm.ExecuteNonQuery();
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

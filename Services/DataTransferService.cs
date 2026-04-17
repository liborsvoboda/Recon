using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
//using Opc.UaFx;
//using Opc.UaFx.Client;
using System.Collections.Immutable;
using System.Data;


namespace Recon.Services
{
    public class DataTransferService : BackgroundService
    {
        private readonly ILogger<DataTransferService> _logger;
        private static PeriodicTimer timer;

        public DataTransferService(ILogger<DataTransferService> logger) { _logger = logger; }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken) {
            timer = new PeriodicTimer(TimeSpan.FromMilliseconds(double.Parse(Program.Settings.SettingData.GetValueOrDefault("dataTransferInterval"))));

            try {
                while (await timer.WaitForNextTickAsync() && true) {
                    ExportSettingList? exportSettingList;
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                        exportSettingList = new ReconContext().ExportSettingLists.Where(a => a.EnableDbExport == true).FirstOrDefault();
                    }

                    List<InsertTable> data = new List<InsertTable>();
                    using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                        data = new ReconContext().InsertTables.ToList();
                    }

                    bool saveDataToRemote = true;
                    data.ForEach(record => {

                        MachineVariableList? machineVariableList;
                        using (new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted })) {
                            machineVariableList = new ReconContext().MachineVariableLists.Where(a => a.MachineName == record.MachineName && a.VariableName == record.VariableName).FirstOrDefault();
                        }

                        if (exportSettingList?.DataBaseType == "MSSQL") {
                            try {
                                if (machineVariableList != null) {
                                    string insert = $"INSERT INTO {machineVariableList.InsertTableName} ([{machineVariableList.InsertMachineNameColumnName}], [{machineVariableList.InsertVariableNameColumnName}], [{machineVariableList.InsertVariableValueColumnName}], [{machineVariableList.InsertTimeStampColumnName}]) VALUES ('{record.MachineName}', '{record.VariableName}', '{record.VariableValue}', '{record.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}');";
                                    SqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                    cnn.Open();
                                    if (cnn.State == ConnectionState.Open) {
                                        DataSet dataTable = new();
                                        SqlDataAdapter mDataAdapter = new(new SqlCommand(insert, cnn));
                                        mDataAdapter.Fill(dataTable);
                                        cnn.Close();
                                        saveDataToRemote = true;
                                    } else { saveDataToRemote = false; }
                                    
                                    if (saveDataToRemote) {
                                        var deleteRec = new ReconContext().InsertTables.Remove(record);
                                        deleteRec.Context.SaveChanges();
                                    }
                                }
                            }
                            catch (Exception ex) { GlobalFunctions.WriteLogFile("Data Transfer Service Insert MSSQL Program Exception: " + ex.StackTrace); }

                        } else if(exportSettingList?.DataBaseType == "MYSQL") {
                            try {
                                if (machineVariableList != null) {
                                    MySqlConnection cnn = new(exportSettingList.TargetDbConnectionString);
                                    cnn.Open();
                                    if (cnn.State == ConnectionState.Open) {
                                        DataSet dataTable = new();
                                        MySqlCommand comm = cnn.CreateCommand();
                                        comm.CommandText = $"INSERT INTO {machineVariableList.InsertTableName} ({machineVariableList.InsertMachineNameColumnName}, {machineVariableList.InsertVariableNameColumnName}, {machineVariableList.InsertVariableValueColumnName}, {machineVariableList.InsertTimeStampColumnName}) VALUES('{record.MachineName}', '{record.VariableName}', '{record.VariableValue}', '{record.TimeStamp.ToString("yyyy-MM-dd H:mm:ss")}')";
                                        comm.ExecuteNonQuery();
                                        cnn.Close();
                                        saveDataToRemote = true;
                                    } else { saveDataToRemote = false; }

                                    if (saveDataToRemote) {
                                        var deleteRec = new ReconContext().InsertTables.Remove(record);
                                        deleteRec.Context.SaveChanges();
                                    }
                                }
                            }
                            catch (Exception ex) { GlobalFunctions.WriteLogFile("Data Transfer Service Insert MYSQL Program Exception: " + ex.StackTrace); }
                        }
                    });
                }
            }
            catch (Exception ex) { GlobalFunctions.WriteLogFile("Data Transfer Service Program Exception: " + ex.StackTrace); }

            Debug.WriteLine(DateTime.Now);
            _logger.LogInformation("DataTransfer Service running at: {time}", DateTimeOffset.Now);
        }
    }
}

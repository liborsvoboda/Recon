using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;

namespace Recon.Classes
{

    public class MachineStatus
    {
        public string MachineName { get; set; }
        public bool IsRunning { get; set; }
    }


    public class MachineThread {
        public Thread? Thread { get; set; }
        public string? MachineName { get; set; }
    }

    public class MachineThreads {
        public List<MachineThread> MachineThread { get; set; } = [];
    }

    public class MachineData {
        public string MachineName { get; set; }
        public Dictionary<string, object> PreviousData { get; set; } = new Dictionary<string, object>();
        public Dictionary<string, object> LastData { get; set; } = new Dictionary<string, object>();
        public DateTime TimeStamp { get; set; }
    }


    public class UpdateMachineData {
        public string MachineName { get; set; }
        public Dictionary<string, object> Data { get; set; } = new Dictionary<string, object>();
        public DateTime TimeStamp { get; set; }
    }


    public class ConnectionPool {
        public List<Thread> ThreadsQuery { get; set; } = [];
        public bool InsertDBQuery { get; set; } = false;
        public List<Record?> TargetDbQuery { get; set; } = [];
        public List<SqlConnection> MsSqlConnection { get; set; } = [];
        public List<MySqlConnection> MySqlConnection { get; set; } = [];
    }


    public enum RecordType
    {
        Insert,
        Update,
    }

    public class Record
    {
        public bool Processed { get; set; } = false;
        public DateTime ProcessedStart { get; set; } = DateTime.Now;
        public string? MachineName { get; set; }
        public string? ValueName { get; set; }
        public string? Value { get; set; }
        public DateTime? TimeStamp { get; set; }
        public RecordType RecordType { get; set; }
        public string? InsertTableName { get; set; }
        public string? InsertMachineNameColumnName { get; set; }
        public string? InsertVariableNameColumnName { get; set; }
        public string? InsertVariableValueColumnName { get; set; }
        public string? InsertTimeStampColumnName { get; set; }
        public string? UpdateTableName { get; set; }
        public string? UpdateVariablePkColumnName { get; set; }
        public string? UpdateVariablePkColumnValue { get; set; }
        public string? UpdateVariableValueColumnName { get; set; }
        public string? UpdateTimeStampColumnName { get; set; }
    }
}

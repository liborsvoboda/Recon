using System.Collections.Immutable;

namespace Recon.Classes
{
    public class Settings {
        public ImmutableDictionary<string, string> SettingData { get; set; }
    }

    public class MachineData {
        public string MachineName { get; set; }
        public Dictionary<string, object> PreviousData { get; set; } = new Dictionary<string, object>();
        public Dictionary<string, object> LastData { get; set; } = new Dictionary<string, object>();
        public DateTime TimeStamp { get; set; }
    }


    public class UpdateMachineData
    {
        public string MachineName { get; set; }
        public Dictionary<string, object> Data { get; set; } = new Dictionary<string, object>();
        public DateTime TimeStamp { get; set; }
    }
}

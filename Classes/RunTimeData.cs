using System.Collections.Immutable;

namespace Recon.Classes
{
    public class Settings {
        public ImmutableDictionary<string, string> SettingData { get; set; }
    }

    public class MachineData {
        public string MachineName { get; set; }
        public ImmutableDictionary<string, object> PreviousData { get; set; }
        public ImmutableDictionary<string, object> LastData { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}

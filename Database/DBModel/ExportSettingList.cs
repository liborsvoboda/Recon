using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("ExportSettingList")]
public partial class ExportSettingList
{
    [Key]
    public int Id { get; set; }

    public bool EnableDbExport { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? DataBaseType { get; set; }

    [StringLength(524)]
    [Unicode(false)]
    public string? TargetDbConnectionString { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }
}

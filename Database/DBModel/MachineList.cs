using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("MachineList")]
public partial class MachineList
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string MachineName { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string Connection { get; set; } = null!;

    [Unicode(false)]
    public string? Image { get; set; }

    public int CycleReadInterval { get; set; }

    [Unicode(false)]
    public string MachineVariables { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }
}

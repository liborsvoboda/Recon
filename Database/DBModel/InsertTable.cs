using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("InsertTable")]
[Index("MachineName", "VariableName", Name = "IX_InsertTable")]
[Index("MachineName", Name = "IX_InsertTable_1")]
public partial class InsertTable
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string MachineName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string VariableName { get; set; } = null!;

    [Unicode(false)]
    public string VariableValue { get; set; } = null!;

    public DateTime TimeStamp { get; set; }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("OpcUaInsertTable")]
[Index("MachineName", "VariableName", Name = "IX_OpcUaInsertTable")]
[Index("MachineName", Name = "IX_OpcUaInsertTable_1")]
public partial class OpcUaInsertTable
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

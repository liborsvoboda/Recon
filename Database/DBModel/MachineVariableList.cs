using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("MachineVariableList")]
public partial class MachineVariableList
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string MachineName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string VariableName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string DbRequestType { get; set; } = null!;

    [StringLength(100)]
    [Unicode(false)]
    public string? InsertTableName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? InsertMachineNameColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? InsertVariableNameColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? InsertVariableValueColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? InsertTimeStampColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? UpdateTableName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? UpdateVariablePkColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? UpdateVariablePkColumnValue { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? UpdateVariableValueColumnName { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? UpdateTimeStampColumnName { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("DatabaseVariableTypeList")]
[Index("DatabaseName", "VariableType", Name = "IX_DatabaseVariableType", IsUnique = true)]
public partial class DatabaseVariableTypeList
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string DatabaseName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string VariableType { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }
}

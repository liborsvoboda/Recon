using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("Table_1")]
[Index("Name", Name = "IX_Table_1", IsUnique = true)]
public partial class Table1
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("Table1s")]
    public virtual UserList User { get; set; } = null!;
}

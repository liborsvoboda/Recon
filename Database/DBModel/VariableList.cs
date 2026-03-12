using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("VariableList")]
[Index("Name", Name = "IX_VariableList", IsUnique = true)]
public partial class VariableList
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string InheritedType { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }

    [ForeignKey("InheritedType")]
    [InverseProperty("VariableLists")]
    public virtual VariableTypeList InheritedTypeNavigation { get; set; } = null!;

    [ForeignKey("UserId")]
    [InverseProperty("VariableLists")]
    public virtual UserList User { get; set; } = null!;
}

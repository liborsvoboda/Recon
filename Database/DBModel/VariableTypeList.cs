using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("VariableTypeList")]
[Index("Name", Name = "IX_VariableTypeList", IsUnique = true)]
public partial class VariableTypeList
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }

    [ForeignKey("UserId")]
    [InverseProperty("VariableTypeLists")]
    public virtual UserList User { get; set; } = null!;

    [InverseProperty("InheritedTypeNavigation")]
    public virtual ICollection<VariableList> VariableLists { get; set; } = new List<VariableList>();
}

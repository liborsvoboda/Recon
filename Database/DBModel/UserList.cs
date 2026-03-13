using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("UserList")]
[Index("UserName", Name = "IX_UserList")]
public partial class UserList
{
    [Key]
    public int Id { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string RoleName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string UserName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Surname { get; set; } = null!;

    [StringLength(2048)]
    [Unicode(false)]
    public string Password { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    [StringLength(1024)]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    public DateTime TimeStamp { get; set; }

    [ForeignKey("RoleName")]
    [InverseProperty("UserLists")]
    public virtual UserRoleList RoleNameNavigation { get; set; } = null!;

    [InverseProperty("User")]
    public virtual ICollection<Table1> Table1s { get; set; } = new List<Table1>();
}

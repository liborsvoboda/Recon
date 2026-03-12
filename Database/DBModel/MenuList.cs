using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

[Table("MenuList")]
public partial class MenuList
{
    [Key]
    public int Id { get; set; }

    public int? ParentId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Icon { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string MenuType { get; set; } = null!;

    public int Sequence { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [Unicode(false)]
    public string? Description { get; set; }

    [Unicode(false)]
    public string? HtmlContent { get; set; }

    [Unicode(false)]
    public string? JsContent { get; set; }

    [Unicode(false)]
    public string? CssContent { get; set; }

    [StringLength(1024)]
    [Unicode(false)]
    public string? AllowedUserRoles { get; set; }

    public int UserId { get; set; }

    public DateTime TimeStamp { get; set; }
}

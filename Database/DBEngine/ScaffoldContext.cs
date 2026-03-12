using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Recon.DBModel;

public partial class ScaffoldContext : DbContext
{
    public ScaffoldContext() { }
    public ScaffoldContext(DbContextOptions<ScaffoldContext> options)
        : base(options)
    {
    }

    public virtual DbSet<MenuList> MenuLists { get; set; }

    public virtual DbSet<UserList> UserLists { get; set; }

    public virtual DbSet<UserRoleList> UserRoleLists { get; set; }

    public virtual DbSet<VariableList> VariableLists { get; set; }

    public virtual DbSet<VariableTypeList> VariableTypeLists { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Czech_CS_AS");

        modelBuilder.Entity<MenuList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_MenuList_TimeStamp");
        });

        modelBuilder.Entity<UserList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_UserList_TimeStamp");

            entity.HasOne(d => d.RoleNameNavigation).WithMany(p => p.UserLists)
                .HasPrincipalKey(p => p.Name)
                .HasForeignKey(d => d.RoleName)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserList_UserRoleList");
        });

        modelBuilder.Entity<UserRoleList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_UserRoleList_TimeStamp");
        });

        modelBuilder.Entity<VariableList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_VariableList_TimeStamp");

            entity.HasOne(d => d.InheritedTypeNavigation).WithMany(p => p.VariableLists)
                .HasPrincipalKey(p => p.Name)
                .HasForeignKey(d => d.InheritedType)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_VariableList_VariableTypeList");

            entity.HasOne(d => d.User).WithMany(p => p.VariableLists)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_VariableList_UserList");
        });

        modelBuilder.Entity<VariableTypeList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_VariableTypeList_TimeStamp");

            entity.HasOne(d => d.User).WithMany(p => p.VariableTypeLists)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_VariableTypeList_UserList");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

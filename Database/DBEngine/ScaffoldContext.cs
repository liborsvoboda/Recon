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

    public virtual DbSet<ExportSettingList> ExportSettingLists { get; set; }

    public virtual DbSet<InsertTable> InsertTables { get; set; }

    public virtual DbSet<MachineList> MachineLists { get; set; }

    public virtual DbSet<MachineVariableList> MachineVariableLists { get; set; }

    public virtual DbSet<MenuList> MenuLists { get; set; }

    public virtual DbSet<UserList> UserLists { get; set; }

    public virtual DbSet<UserRoleList> UserRoleLists { get; set; }

    public virtual DbSet<VariableList> VariableLists { get; set; }

    public virtual DbSet<VariableTypeList> VariableTypeLists { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("Czech_CS_AS");

        modelBuilder.Entity<ExportSettingList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_ExportSettingList_TimeStamp");
        });

        modelBuilder.Entity<InsertTable>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_InsertTable_TimeStamp");
        });

        modelBuilder.Entity<MachineList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_MachineList_TimeStamp");
        });

        modelBuilder.Entity<MachineVariableList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_MachineVariableList_TimeStamp");
        });

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
        });

        modelBuilder.Entity<VariableTypeList>(entity =>
        {
            entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())", "DF_VariableTypeList_TimeStamp");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

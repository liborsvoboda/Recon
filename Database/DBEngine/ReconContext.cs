using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Data.Common;


namespace Recon.Controllers {

    public partial class ReconContext : ScaffoldContext {
        private static ILogger<ReconContext> _logger;

        public ReconContext(ILogger<ReconContext> logger) => _logger = logger;

        public ReconContext() {}

        public ReconContext(DbContextOptions<ScaffoldContext> options)
            : base(options) {
            ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlite("Filename=Data\\Recon.db3");
            }
        }
    }

    /// <summary>
    /// Database Context Extensions for All Types Procedures For Retun Data in procedure can be
    /// Simple SELECT * XXX and you Create Same Class for returned DataSet
    /// </summary>
    public static class DatabaseContextExtensions {



        public static void RunTransaction(ReconContext dbContext, Func<IDbContextTransaction, bool> act) {
            if (dbContext != null && act != null) {
                var executionStrategy = dbContext.Database.CreateExecutionStrategy();

                executionStrategy.Execute(() => {

                    using var ret = dbContext.Database.BeginTransaction();
                    if (ret != null) {

                    try {
                        if (act.Invoke(ret)) {
                            ret.Commit();
                        }
                    } catch (Exception e) {
                        ret.Rollback();
                        throw new Exception(GlobalFunctions.GetErrMsg(e));
                        }

                    } else {
                        throw new Exception("Error while starting transaction");
                    }

                });
            }
        }


        public static string CreateDbScript(ReconContext context) {
            return context.Database.GenerateCreateScript();
        }



        public static List<object>? EasyITCenterCollectionFromSql(this ReconContext ReconContext, Type type, string sql) {
            using var cmd = ReconContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                List<object>? results = new List<object>();
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = GlobalFunctions.ConvertTableToClassListByType(table, type).ToList(); 
                //(table.AsDataView());

                return results;
            } catch (Exception ex) { }
            return null;
        }


        public static List<T> GetListOf<T>(this ReconContext ReconContext, string sql) where T : class, new() {
            using var cmd = ReconContext.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = sql;
            if (cmd.Connection?.State != ConnectionState.Open)
                cmd.Connection?.Open();
            try {
                List<T> results = null;
                DataTable table = new DataTable();
                table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                table.Load(cmd.ExecuteReader());
                results = GlobalFunctions.GenericConvertTableToClassList<T>(table).ToList();

                return results;
            } catch (Exception ex) { }
            return new List<T>();
        }


        public static IQueryable? Set(this ReconContext context, Type T) {
            MethodInfo? method = typeof(ReconContext).GetMethod(nameof(ReconContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(T);
            return method?.Invoke(context, null) as IQueryable;
        }


        public static IQueryable<T>? Set<T>(this ReconContext context) {
            MethodInfo? method = typeof(ReconContext).GetMethod(nameof(ReconContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(typeof(T));
            return method?.Invoke(context, null) as IQueryable<T>;
        }


        public static object? GetDbSet(ReconContext db, Type T) {
            MethodInfo? method = typeof(ReconContext).GetMethod(nameof(ReconContext.Set), BindingFlags.Public | BindingFlags.Instance);
            method = method?.MakeGenericMethod(T);
            return method?.Invoke(Set(db, T), null);
        }


        public static object GetDbSet<T>(ReconContext db) where T : class {
           return db.Set<T>() as object;
        }


        public static DbTransaction? GetDbTransaction(this ReconContext source) {
            return (source.Database.BeginTransaction() as IInfrastructure<DbTransaction>)?.Instance;
        }


        public static object? ExecuteScalar(this ReconContext context,
        string sql, List<DbParameter> parameters = null,
        CommandType commandType = CommandType.Text,
        int? commandTimeOutInSeconds = null) {
            Object? value;
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
               
                    if (cmd.Connection?.State != ConnectionState.Open) {
                    cmd.Connection?.Open();
                    }
                    cmd.CommandText = sql;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    value = cmd.ExecuteScalar();
                    cmd.Connection?.Close();
                }
                return value;

            } catch (Exception ex) { }
            return new object();
        }


        public async static Task<object?> ExecuteScalarAsync(this ReconContext context, string sql, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            Object? value;
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {

                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    cmd.CommandText = sql;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) { cmd.CommandTimeout = (int)commandTimeOutInSeconds; }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }
                    value = await cmd.ExecuteScalarAsync();
                    cmd.Connection?.Close();
                }
                return value;

            } catch (Exception ex) { }
            return new object();
        }


        public static int ExecuteNonQuery(this ReconContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    int value = cmd.ExecuteNonQuery();
                    //cmd.Connection?.Close();
                    return value;
                }
            } catch (Exception ex) { }
            return new int();
        }


        public async static Task<int> ExecuteNonQueryAsync(this ReconContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) {
                        cmd.Parameters.AddRange(parameters.ToArray());
                    }
                    int value = await cmd.ExecuteNonQueryAsync();
                    //cmd.Connection?.Close();
                    return value;
                }
            } catch (Exception ex) { }
            return new int();
        }


        public static DataTable ExecuteReader(this ReconContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        cmd.Connection?.Open();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }

                    DataTable? table = new DataTable();
                    table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                    table.Load(cmd.ExecuteReader());
                    table = (table.DefaultView.Table?.AsDataView()?.Table );

                    cmd.Connection?.Close();
                    return table;
                  }
            } catch (Exception ex) { }
            return null;
        }


        public async static Task<DataTable> ExecuteReaderAsync(this ReconContext context, string command, List<DbParameter>? parameters = null, CommandType commandType = CommandType.Text, int? commandTimeOutInSeconds = null) {
            try {
                using (var cmd = context.Database.GetDbConnection().CreateCommand()) {
                    if (cmd.Connection?.State != ConnectionState.Open) {
                        await cmd.Connection?.OpenAsync();
                    }
                    var currentTransaction = context.Database.CurrentTransaction;
                    if (currentTransaction != null) {
                        cmd.Transaction = currentTransaction.GetDbTransaction();
                    }
                    cmd.CommandText = command;
                    cmd.CommandType = commandType;
                    if (commandTimeOutInSeconds != null) {
                        cmd.CommandTimeout = (int)commandTimeOutInSeconds;
                    }
                    if (parameters != null) { cmd.Parameters.AddRange(parameters.ToArray()); }

                    DataTable? table = new DataTable();
                    table.Locale = System.Globalization.CultureInfo.InvariantCulture;
                    table.Load(await cmd.ExecuteReaderAsync());
                    table = (table.DefaultView.Table?.AsDataView()?.Table);

                    cmd.Connection?.Close();
                    return table;
                }
            } catch (Exception ex) { }
            return null;
        }


        public static IQueryable<TSource> FromSqlRaw<TSource>(this ReconContext db, string sql, params object[] parameters) where TSource : class {
            var item = db.Set<TSource>().FromSqlRaw(sql, parameters);
            return item;
        }

    }
}
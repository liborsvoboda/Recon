using Microsoft.Extensions.Options;
using Microsoft.OpenApi;
using Recon.Services;

public partial class Program
{
    public static Settings Settings = new() { SettingData = GlobalFunctions.LoadSetting() };
    public static List<MachineData> MachinesData = new();

    private static void Main(string[] args)
    {

        var builder = WebApplication.CreateBuilder(args);
        builder.Services.AddDbContext<ReconContext>(opt => {
            opt.UseSqlServer(Settings.SettingData.FirstOrDefault(a => a.Key == "connectionString").Value, cfg => cfg.EnableRetryOnFailure(1)).UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking); 
        });
        builder.Services.AddHttpContextAccessor();

        builder.Services.AddRazorPages().AddXmlSerializerFormatters().AddXmlDataContractSerializerFormatters(); ;
        builder.Services.AddSwaggerGen(c=> {
            c.AddSecurityDefinition(
                "Basic",
                new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Basic Authorization header for getting Bearer Token.",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = "Basic",
                }
            );
            c.AddSecurityRequirement(document =>
            new OpenApiSecurityRequirement
            {
                [new OpenApiSecuritySchemeReference("Basic", document)] = []
            });
            c.AddSecurityDefinition(
                "Bearer",
                new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Please enter a valid token.",
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    Scheme = "Bearer",
                }
            );
            c.AddSecurityRequirement(document =>
            new OpenApiSecurityRequirement
            {
                [new OpenApiSecuritySchemeReference("Bearer", document)] = []
            });
        });

        builder.Services.AddEndpointsApiExplorer().AddControllersWithViews();
        builder.Services.AddSingleton<IHttpContextAccessor, HtttpContextExtension>();
        builder.Services.AddWindowsService(cfg => { cfg.ServiceName = "Recon"; });
        builder.Services.AddAuthentication(x => {
            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            x.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(x => {
            x.BackchannelHttpHandler = new HttpClientHandler { ServerCertificateCustomValidationCallback = delegate { return true; } };
            x.RequireHttpsMetadata = false;
            x.SaveToken = true;
            x.TokenValidationParameters = GlobalFunctions.ValidAndGetTokenParameters();
            //if (bool.Parse(DbOperations.GetServerParameterLists("ConfigTimeTokenValidationEnabled").Value)) { x.TokenValidationParameters.LifetimeValidator = AuthenticationService.TokenLifetimeValidator; }
            x.Events = new JwtBearerEvents {
                OnAuthenticationFailed = context => {
                    if (context.Exception.GetType() == typeof(SecurityTokenExpiredException)) { context.Response.Headers.Add("IS-TOKEN-EXPIRED", "true"); }
                    return Task.CompletedTask;
                }
            };
        });
        builder.Services.AddHostedService<MachineCycleService>();
        builder.Services.AddHostedService<DataTransferService>();
        var app = builder.Build();

        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.MapControllers();
        app.UseRouting();

        app.UseAuthentication();
        app.UseAuthorization();
        app.MapRazorPages().WithStaticAssets();

        app.Use(async (HttpContext context, Func<Task> next) => {
            context = GlobalFunctions.IncludeCookieTokenToRequest(context); //Include TOKEN
            await next();
        });

        app.MapSwagger();
        app.UseSwagger();
        app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1"); });
        app.UseStaticFiles();
        app.Run();
    }
}
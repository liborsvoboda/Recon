using Microsoft.OpenApi;
using Recon.Controllers;
using Swashbuckle.AspNetCore.SwaggerGen;

public partial class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddEndpointsApiExplorer().AddRazorPages();
        builder.Services.AddWindowsService(cfg => { cfg.ServiceName = "Recon"; });
        builder.Services.AddSwaggerGen(cfg => {
            cfg.AddSecurityDefinition("Basic", new OpenApiSecurityScheme { Name = "Authorization", Type = SecuritySchemeType.Http, Scheme = "basic", In = ParameterLocation.Header, Description = "Basic Authorization header for getting Bearer Token." });
            //cfg.AddSecurityRequirement(new OpenApiSecurityRequirement
            //         { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Basic" } }, new List<string>() } });
            cfg.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme { Description = "JWT Authorization header using the Bearer scheme for All safe APIs.", Name = "Authorization", In = ParameterLocation.Header, Scheme = "bearer", Type = SecuritySchemeType.Http, BearerFormat = "JWT" });
            //cfg.AddSecurityRequirement(new OpenApiSecurityRequirement
            //         { { new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } }, new List<string>() } });

            cfg.SchemaGeneratorOptions = new SchemaGeneratorOptions { SchemaIdSelector = type => type.FullName };
            //cfg.SwaggerDoc(SrvRuntime.SrvVersion, new OpenApiInfo
            //{
            //    Title = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " Server API",
            //    Version = SrvRuntime.SrvVersion,
            //    TermsOfService = new Uri(DbOperations.GetServerParameterLists("ServerPublicUrl").Value),
            //    Description = EICServer.SwaggerDesc,
            //    Contact = new OpenApiContact { Name = "Libor Svoboda", Email = DbOperations.GetServerParameterLists("EmailerServiceEmailAddress").Value, Url = new Uri("https://KlikneteZde.cz") },
            //    License = new OpenApiLicense { Name = DbOperations.GetServerParameterLists("ConfigCoreServerRegisteredName").Value + " Server License", Url = new Uri("https://www.KlikneteZde.Cz") }
            //});

            try { cfg.IncludeXmlComments(Assembly.GetExecutingAssembly().Location, true); } catch { }


            //cfg.InferSecuritySchemes();
            cfg.UseOneOfForPolymorphism();
            //cfg.UseInlineDefinitionsForEnums();
            cfg.DescribeAllParametersInCamelCase();
            cfg.EnableAnnotations(true, true);
            cfg.UseAllOfForInheritance();
            cfg.SupportNonNullableReferenceTypes();
            //cfg.UseAllOfToExtendReferenceSchemas();
            cfg.DocInclusionPredicate((docName, description) => true);
            cfg.CustomSchemaIds(type => type.FullName);
            cfg.ResolveConflictingActions(x => x.First());
        }).AddAuthentication(x => {
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
        builder.Services.AddDbContext<ReconContext>(opt => opt.UseSqlServer("Server=127.0.0.1\\SQLEXPRESS;Database=RECON;User ID=easyitcenter;Password=easyitcenter;TrustServerCertificate=True;command timeout=300;").UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

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

        app.MapStaticAssets();
        app.MapRazorPages().WithStaticAssets();

        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        });

        app.Use(async (HttpContext context, Func<Task> next) => {
            context = GlobalFunctions.IncludeCookieTokenToRequest(context); //Include TOKEN
            await next();
        });

        app.Run();
    }
}
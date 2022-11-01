using CodeRestApi.Data;
using Microsoft.EntityFrameworkCore;

namespace CodeRestApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            var connectionStringMySql = builder.Configuration.GetConnectionString("defaultConnection");
            builder.Services.AddDbContext<DataContext>(x => x.UseMySql(
                
                    connectionStringMySql, ServerVersion.Parse("8.0.30")
                    )
                );
           // builder.Services.AddDbContext<DataContext>(option => option.UseMySql("Server=localhost;Database=codetravel_springboot;User=root;Password=Recode@22", new MySqlServerVersion(new Version)));

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(options =>
            {
                options.WithOrigins("http://localhost:3001");
                options.AllowAnyMethod();
                options.AllowAnyHeader();
            });

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
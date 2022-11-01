using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using CodeRestApi.Data;

namespace CodeRestApi.Data;

    public class SampleContexFactory : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<DataContext>();
            var connectionString = configuration.GetConnectionString("defaultConnection");
            builder.UseSqlServer(connectionString, b => b.MigrationsAssembly("CodeRestApi"));

            return new DataContext(builder.Options);
        }
    };


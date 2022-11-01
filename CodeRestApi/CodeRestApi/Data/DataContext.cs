using CodeRestApi.Model;
using Microsoft.EntityFrameworkCore;




namespace CodeRestApi.Data
{
    public class DataContext : DbContext
    {

        protected readonly IConfiguration Configuration;    

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<Agendamento> Agendamentos { get; set; }

    }
}

using Microsoft.EntityFrameworkCore;
using Movie.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Infrastructure.Context
{
    public class DataContext : DbContext
    {
        DataContext(DbContextOptions options) : base(options) { }

        DbSet<Client> Clients { get; set; }

        DbSet<Film> Films { get; set; }

        DbSet<Order> Orders { get; set; }

    }
}

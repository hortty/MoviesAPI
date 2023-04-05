using Movie.Domain.Interfaces;
using Movie.Domain.Models;
using Movie.Infrastructure.Context;

namespace Movie.Infrastructure.Repositories;

public class FilmRepository : GenericRepository<Film>, IFilmRepository
{
    public FilmRepository(DataContext dbContext) : base(dbContext)
    {
    }
}

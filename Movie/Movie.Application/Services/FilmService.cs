using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Movie.Domain.Interfaces;
using Movie.Domain.Models;

namespace Movie.Application.Services
{
    public class FilmService : GenericService<Film, IFilmRepository>, IFilmService
    {
        public FilmService(IFilmRepository repository, IMapper mapper) : base(repository, mapper)
        {
        }
    }
}
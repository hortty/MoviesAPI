using AutoMapper;
using Movie.Domain.Dtos;
using Movie.Domain.Models;

namespace Movie.Application.Mappings;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Film, FilmDto>().ReverseMap();
    }
}

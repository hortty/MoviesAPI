using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movie.Domain.Dtos;
using Movie.Domain.Interfaces;

namespace Movie.Api.Controllers
{
    [Route("Film")]
    [ApiController]
    public class FilmController : ControllerBase
    {
        private IFilmService _filmService;

        public FilmController(IFilmService filmService)
        {
            _filmService = filmService;
        }

        [HttpGet]
        [Route("{Id}")]
        public async Task<IActionResult> GetById([FromRoute] GetFilmDto getFilmDto)
        {
            return Ok(await _filmService.ListById<GetFilmDto, FoundFilmDto>(getFilmDto));
        }

        [HttpDelete]
        [Route("{Id}")]
        public async Task<IActionResult> Remove([FromRoute] DeleteFilmDto deleteFilmDto)
        {
            return Ok(await _filmService.Delete<DeleteFilmDto, DeletedFilmDto>(deleteFilmDto));
        }

        [HttpPost]
        public async Task<IActionResult> Delete([FromBody] CreateFilmDto createFilmDto)
        {
            return Ok(await _filmService.Create<CreateFilmDto, CreatedFilmDto>(createFilmDto));
        }
    }
}

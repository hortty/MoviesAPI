using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movie.Domain.Dtos;
using Movie.Domain.Interfaces;

namespace Movie.Api.Controllers
{
    [Route("ShoppingCartMovie")]
    [ApiController]
    public class ShoppingCartMovieController : ControllerBase
    {
        private IShoppingCartMovieService _shoppingCartMovieService;

        public ShoppingCartMovieController(IShoppingCartMovieService shoppingCartMovieService)
        {
            _shoppingCartMovieService = shoppingCartMovieService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _shoppingCartMovieService.ListAll<FoundShoppingCartMovieDto>());
        }

        [HttpDelete]
        [Route("{Id}")]
        public async Task<IActionResult> Remove([FromRoute] DeleteShoppingCartMovieDto deleteShoppingCartMovieDto)
        {
            return Ok(await _shoppingCartMovieService.Delete<DeleteShoppingCartMovieDto, DeletedShoppingCartMovieDto>(deleteShoppingCartMovieDto));
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateShoppingCartMovieDto createShoppingCartMovieDto)
        {
            return Ok(await _shoppingCartMovieService.Create<CreateShoppingCartMovieDto, CreatedShoppingCartMovieDto>(createShoppingCartMovieDto));
        }

    }
}

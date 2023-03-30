using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Interfaces
{
    public interface IGenericService
    {
        public Task<TOutputDto> Create<TInputDto, TOutputDto>(TInputDto entity);

        public Task<TOutputDto> Update<TInputDto, TOutputDto>(TInputDto entity);

        public Task<TOutputDto> Delete<TInputDto, TOutputDto>(TInputDto entity);

        public Task<IEnumerable<TOutputDto>> ListAll<TOutputDto>();

        public Task<TOutputDto> ListById<TInputDto, TOutputDto>(TInputDto entity);
    }
}

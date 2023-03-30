using Movie.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Application.Services
{
    public class GenericService<TEntity, TRepository> : IGenericService
        where TEntity : class
        where TRepository : IGenericRepository<TEntity>
    {
        private readonly TRepository _repository;
        public GenericService(TRepository repository)
        {
            _repository = repository;
        }

        public Task<TOutputDto> Create<TInputDto, TOutputDto>(TInputDto entity)
        {
            throw new NotImplementedException();
        }

        public Task<TOutputDto> Delete<TInputDto, TOutputDto>(TInputDto entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<TOutputDto>> ListAll<TOutputDto>()
        {
            throw new NotImplementedException();
        }

        public Task<TOutputDto> ListById<TInputDto, TOutputDto>(TInputDto entity)
        {
            throw new NotImplementedException();
        }

        public Task<TOutputDto> Update<TInputDto, TOutputDto>(TInputDto entity)
        {
            throw new NotImplementedException();
        }
    }
}

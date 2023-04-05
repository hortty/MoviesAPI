using Microsoft.EntityFrameworkCore;
using Movie.Domain.Interfaces;
using Movie.Domain.Models;
using Movie.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Infrastructure.Repositories
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly DataContext _dbContext;
        private readonly DbSet<TEntity> _dbSet;

        public GenericRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = dbContext.Set<TEntity>();
        }

        public async Task<TEntity> Create(TEntity entity)
        {
            var createdEntity = await _dbSet.AddAsync(entity);
            await _dbContext.SaveChangesAsync();

            return createdEntity.Entity;
        }

        public async Task<TEntity> Delete(TEntity entity)
        {
            var foundEntity = await ListById(entity);

            if(foundEntity == null)
                throw new InvalidOperationException($"Entity not found.");

            var removedEntity = _dbSet.Remove(foundEntity);
            await _dbContext.SaveChangesAsync();

            return removedEntity.Entity;
        }

        public async Task<IEnumerable<TEntity>> ListAll()
        {
            var foundEntities = await _dbSet.AsNoTracking().ToListAsync();

            if(foundEntities.Equals(null))
                throw new InvalidOperationException($"Entities not found.");

            return foundEntities;
        }

        public async Task<TEntity> ListById(TEntity entity)
        {
            var idProperty = typeof(TEntity).GetProperty("Id");
            long entityId = 0L;

            if(idProperty != null)
                entityId = (long)idProperty.GetValue(entity, null);

            var foundEntity = await _dbSet.FindAsync(entityId);

            if (foundEntity == null)
                throw new InvalidOperationException($"Entity not found.");
            
            return foundEntity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            var foundEntity = await ListById(entity);

            if(foundEntity == null)
            {
                throw new InvalidOperationException($"Entity not found.");
            }

            var updatedEntity = _dbSet.Update(foundEntity);
            await _dbContext.SaveChangesAsync();

            return updatedEntity.Entity;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Dtos
{
    public class FoundFilmDto
    {
        public long Id { get; set; }

        public string Description { get; set; } = String.Empty;

        public decimal Price { get; set; }

        public long Amount { get; set; }

        public long OrderId { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class ShoppingCartMovie : EntityBase
    {
        public long Amount { get; set; }

        public long ShoppingCartId { get; set; }

        public long FilmId { get; set; }
    }
}

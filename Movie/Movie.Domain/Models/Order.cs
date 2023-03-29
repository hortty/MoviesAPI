using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class Order
    {
        public int Id { get; set; }

        public long Amount { get; set; }

        public DateTime DateTime { get; set; }

        public long ClientId { get; set; }

        public long FilmId { get; set; }
    }
}

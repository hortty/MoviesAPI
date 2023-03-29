using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class Client
    {
        public long Id { get; set; }

        public string Name { get; set; } = String.Empty;

        public int Age { get; set; }
    }
}

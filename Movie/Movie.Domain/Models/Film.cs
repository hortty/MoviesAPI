﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class Film : EntityBase
    {
        public string Name { get; set; } = String.Empty;

        public string Description { get; set; } = String.Empty;

        public decimal Price { get; set; }

        public long Amount { get; set; }

        public byte[]? Imagem { get; set; }
    }
}

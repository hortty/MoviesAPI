﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class Sale : EntityBase
    {
        public long Total { get; set; }

        public DateTime Date { get; set; }

        public long UserId { get; set; }
    }
}

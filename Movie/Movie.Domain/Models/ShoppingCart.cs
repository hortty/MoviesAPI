﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class ShoppingCart
    {
        public long Id { get; set; }
        public long UserId { get; set; }
    }
}
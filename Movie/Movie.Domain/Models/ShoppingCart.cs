﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Models
{
    public class ShoppingCart : EntityBase
    {
        public long UserId { get; set; }
    }
}

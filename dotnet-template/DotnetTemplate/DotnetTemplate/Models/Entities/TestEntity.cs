﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Models.Entities
{
    public class TestEntity
    {
        [Key]
        public int Id { get; set; }
        public string Test { get; set; }
    }
}

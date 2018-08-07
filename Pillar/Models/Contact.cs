using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TaskApp.Models
{
    public class Contact
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public int? CustomerId { get; set; }
        public Customer Customer { get; set; }
    }
}
using System.Collections.Generic;

namespace YourNamespace.Models
{
    public class User
    {
        public int Id { get; set; }  // Primary Key
        public string Name { get; set; }  // User Name
        public string Email { get; set; }  // Unique Email
        public string Password { get; set; }  // User Password
        public string? Phone { get; set; }  // Optional Phone Field

        // Navigation property for related products
        public List<Product> Products { get; set; } = new List<Product>();
    }
}

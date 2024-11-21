namespace api.Models
{
    public class Product
    {
        public int Id { get; set; }  // Primary Key
        public string Name { get; set; }  // Product Name
        public string Description { get; set; }  // Product Description
        public float Price { get; set; }  // Product Price
        public int? Quantity { get; set; }  // Optional Quantity Field
        public int UserId { get; set; }  // Foreign Key referencing User

        // Navigation property to User
        public User User { get; set; }
    }
}

using System.Collections.Generic;
using api.Models;

namespace api.Services
{
    public interface IProductService
    {
        // Define the methods you need, e.g.:
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        Product CreateProduct(Product product);
        void UpdateProduct(int id, Product product);
        void DeleteProduct(int id);
    }
}

namespace YourNamespace.Services
{
    public interface IProductService
    {
        // Define the methods you need, e.g.:
        IEnumerable<Product> GetAllProducts();
        Product GetProductById(int id);
        void CreateProduct(Product product);
        void UpdateProduct(int id, Product product);
        void DeleteProduct(int id);
    }
}

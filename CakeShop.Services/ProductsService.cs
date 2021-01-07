namespace CakeShop.Services
{
    using CakeShop.Data;
    using CakeShop.Data.Models;
    using CakeShop.ViewModels;
    using System.Collections.Generic;
    using System.Linq;

    public class ProductsService : IProductsService
    {
        private readonly ApplicationDbContext db;

        public ProductsService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public void Add(string product, double price, int quantity, string imageUrl)
        {
            this.db.Products.Add(new Product
            {
                Name = product,
                Price = price,
                Quantity = quantity,
                ImageUrl = imageUrl,
            });
            this.db.SaveChanges();
        }

        public IEnumerable<AllProductsViewModel> All()
        {
            var products = this.db.Products
                .Select(x => new AllProductsViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Price = x.Price,
                    Image = x.ImageUrl,
                }).ToList();

            return products;
        }

        public ProductDetailsViewModel Details(int id)
        {
            var product = this.db.Products
                .Where(x => x.Id == id)
                .Select(x => new ProductDetailsViewModel
                {
                    Name = x.Name,
                    Price = x.Price,
                    Quantity = x.Quantity,
                    Image = x.ImageUrl,
                }).FirstOrDefault();

            return product;
        }
    }
}

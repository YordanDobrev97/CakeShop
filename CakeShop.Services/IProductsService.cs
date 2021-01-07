namespace CakeShop.Services
{
    using CakeShop.ViewModels;
    using System.Collections.Generic;

    public interface IProductsService
    {
        IEnumerable<AllProductsViewModel> All();

        void Add(string product, double price, int quantity, string imageUrl);

        ProductDetailsViewModel Details(int id);
    }
}

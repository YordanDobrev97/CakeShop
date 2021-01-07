using CakeShop.Services;
using CakeShop.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace CakeShop.Web.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService productsService;

        public ProductsController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        public IActionResult All()
        {
            var products = this.productsService.All();
            return new JsonResult(products);
        }

        [HttpPost]
        public IActionResult Add([FromBody] AddProductInputModel input)
        {
            this.productsService.Add(input.Product, input.Price, input.Quantity, input.Image);
            return new JsonResult("Ok");
        }

        [HttpGet("{id}")]
        public IActionResult Details(int id)
        {
            var product = this.productsService.Details(id);
            return new JsonResult(product);
        }
    }
}

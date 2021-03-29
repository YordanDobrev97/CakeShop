namespace CakeShop.Data.Models
{
    public class Order
    {
        public int Id { get; set; }

        public decimal TotalPrice { get; set; }

        public int Quantity { get; set; }
    }
}

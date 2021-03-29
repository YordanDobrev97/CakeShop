namespace CakeShop.Data.Models
{
    public class UserOrder
    {
        public int Id { get; set; }

        public int OrderId { get; set; }

        public Order Order { get; set; }

        public int UserProductId { get; set; }

        public UserProduct UserProduct { get; set; }
    }
}

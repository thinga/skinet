namespace Core.Entities.OrderAggregte
{
    public class DeliveryMethod : BaseEntity
    {
        public string Shortname { get; set; }
        public string DeliveryTime { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        
    }
}
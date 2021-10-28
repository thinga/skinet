using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregte;

namespace Core.Interfaces
{
    public interface IPaymentService
    {

        Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId);
        Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId);
        Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);
         
    }
}
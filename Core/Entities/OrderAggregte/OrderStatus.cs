using System.Runtime.Serialization;

namespace Core.Entities.OrderAggregte
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")]
       Pending,

       [EnumMember(Value = "Payment Received")]
       PaymentRecevied,

       [EnumMember(Value = "Payment Received")]
       PaymentFailed

    }
}
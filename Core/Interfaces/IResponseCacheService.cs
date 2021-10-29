using System;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
        Task CachResponseAsync(string cachKey, object response, TimeSpan timeToLive);
        Task<string> GetCachedResponseAsync(string cachKey);
    }
}
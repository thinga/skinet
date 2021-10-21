using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities.OrderAggregte;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string RetrieveEmailFromPrincipal(this ClaimsPrincipal user)
        {
            // return user.FindirstValue(ClaimTypes.Email);
            return user.FindFirstValue(ClaimTypes.Email);

        }

    }
}
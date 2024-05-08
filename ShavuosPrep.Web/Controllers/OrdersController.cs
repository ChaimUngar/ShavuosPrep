using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShavuosPrep.Data;

namespace ShavuosPrep.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly string _connectionString;
        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addorder")]
        public void AddOrder(Order order)
        {
            var repo = new OrderRepository(_connectionString);
            repo.Add(order);
        }
    }
}

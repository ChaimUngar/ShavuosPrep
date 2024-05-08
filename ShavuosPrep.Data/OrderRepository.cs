using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShavuosPrep.Data
{
    public class OrderRepository
    {
        private readonly string _connectionString;
        public OrderRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void Add(Order order)
        {
            var context = new OrdersDataContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }
    }
}

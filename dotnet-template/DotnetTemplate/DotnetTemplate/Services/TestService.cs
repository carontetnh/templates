using DotnetTemplate.Data;
using DotnetTemplate.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Services
{
    public class TestService : ITestService
    {
        private readonly ApplicationDbContext dbContext;

        public TestService(ApplicationDbContext context) {
            this.dbContext = context;
        }

        public IEnumerable<TestResponse> GetTests() {
            List <TestResponse> response = new List<TestResponse>();

            response.Add(new TestResponse()
            {
                Test = "Test"
            });

            return response;
        }
    }
}

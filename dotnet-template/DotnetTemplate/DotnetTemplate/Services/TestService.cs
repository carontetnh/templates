using AutoMapper;
using DotnetTemplate.Data;
using DotnetTemplate.Models.DTOs;
using DotnetTemplate.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Services
{
    public class TestService : ITestService
    {
        private readonly ApplicationDbContext dbContext;
        private readonly IMapper _mapper;

        public TestService(ApplicationDbContext context,
            IMapper mapper) {
            this.dbContext = context;
            _mapper = mapper;
        }

        public IEnumerable<TestResponse> GetTests(string filter = "") {
            List <TestResponse> response = new List<TestResponse>();

            response = dbContext.TestItems
                .Where(test => test.Test.ToLower().Contains(filter.ToLower()))
                .Select(test => _mapper.Map<TestResponse>(test))
                .ToList();

            return response;
        }

        public TestResponse AddTest(TestRequest request) {
            TestEntity test = _mapper.Map<TestEntity>(request);
            dbContext.Add(test);
            dbContext.SaveChanges();
            return _mapper.Map<TestResponse>(test);
        }
    }
}

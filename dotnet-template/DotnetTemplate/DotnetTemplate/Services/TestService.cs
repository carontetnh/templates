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
            if (test.Id == 0)
            {
                dbContext.Add(test);
            }
            else {
                TestEntity existingTest = dbContext.TestItems.FirstOrDefault(t => t.Id == test.Id);
                existingTest.Test = test.Test;
                dbContext.Update(existingTest);
            }
            dbContext.SaveChanges();
            return _mapper.Map<TestResponse>(test);
        }

        public TestResponse GetTest(int id)
        {

            TestEntity test = dbContext.TestItems.FirstOrDefault(t => t.Id == id);
            return _mapper.Map<TestResponse>(test);
        }

        public IEnumerable<TestResponse> DeleteTest(int id) {

            //Next time modify a state instead on deleting a record

            TestEntity test = dbContext.TestItems.FirstOrDefault(t => t.Id == id);
            dbContext.TestItems.Remove(test);
            dbContext.SaveChanges();

            return dbContext.TestItems.Select(test => _mapper.Map<TestResponse>(test))
                .ToList();
        }
    }
}

using DotnetTemplate.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Services
{
    public interface ITestService
    {
        IEnumerable<TestResponse> GetTests(string filter = "");

        TestResponse AddTest(TestRequest request);

        IEnumerable<TestResponse> DeleteTest(int id);

        TestResponse GetTest(int id);
    }
}

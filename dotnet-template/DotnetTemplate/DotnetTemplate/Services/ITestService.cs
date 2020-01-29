using DotnetTemplate.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Services
{
    public interface ITestService
    {
        IEnumerable<TestResponse> GetTests();

        TestResponse AddTest(TestRequest request);
    }
}

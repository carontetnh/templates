using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotnetTemplate.Models.DTOs;
using DotnetTemplate.Services;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.Swagger.Annotations;

namespace DotnetTemplate.Controllers
{
    public class TestController : Controller
    {
        private readonly ITestService _testService;

        public TestController(ITestService testService) {
            _testService = testService;
        }

        [HttpGet("api/tests")]
        [ProducesResponseType(200)]
        [SwaggerOperation("Test Description")]

        public IEnumerable<TestResponse> GetTests()
        {
            var response = _testService.GetTests();
            return response;
        }

        [HttpPost("api/test")]
        [ProducesResponseType(200)]
        [SwaggerOperation("Test Description")]

        public IActionResult PostTests([FromBody]TestRequest request)
        {
            var response = _testService.AddTest(request);
            return Ok(response);
        }
    }
}
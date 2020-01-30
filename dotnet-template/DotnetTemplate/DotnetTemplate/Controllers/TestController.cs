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

        [HttpGet("api/tests/{search}")]
        [ProducesResponseType(200)]
        [SwaggerOperation("Test Description")]

        public IEnumerable<TestResponse> GetTestsByValue(string search)
        {
            var response = _testService.GetTests(search);
            return response;
        }

        [HttpGet("api/test/{id}")]
        [ProducesResponseType(200)]
        [SwaggerOperation("Test Description")]

        public TestResponse GetTestById(int id)
        {
            var response = _testService.GetTest(id);
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

        [HttpDelete("api/test/{id}")]
        public IActionResult DeleteTest(int id) {
            var response = _testService.DeleteTest(id);
            return Ok(response);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DotnetTemplate.Models;
using DotnetTemplate.Models.DTOs;
using DotnetTemplate.Models.Entities;
using DotnetTemplate.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace DotnetTemplate.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUserService _userService;

        public LoginController(IUserService userService) {
            _userService = userService;
        }

        [HttpPost("api/login")]
        public UserEntity Login([FromBody]LoginRequest user)
        {
            return _userService.Login(user, HttpContext);
        }

        [HttpPost("api/register")]
        public UserEntity Register([FromBody]LoginRequest user)
        {
            return _userService.Register(user);
        }

        [HttpGet("api/login/getsessionvariable")]
        public Security GetSessionVariable() {
            return _userService.GetSessionVariable(HttpContext);
        }

        [HttpGet("api/login/close")]
        public Security CloseSession() {
            return _userService.CloseSession(HttpContext);
        }
    }
}
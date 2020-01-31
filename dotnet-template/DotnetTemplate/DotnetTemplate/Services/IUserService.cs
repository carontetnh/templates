using DotnetTemplate.Models;
using DotnetTemplate.Models.DTOs;
using DotnetTemplate.Models.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Services
{
    public interface IUserService
    {
        UserEntity Login(LoginRequest user, HttpContext context);

        Security GetSessionVariable(HttpContext context);

        Security CloseSession(HttpContext context);

        UserEntity Register(LoginRequest user);
    }
}

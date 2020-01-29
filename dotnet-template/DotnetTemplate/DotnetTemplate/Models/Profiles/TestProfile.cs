using AutoMapper;
using DotnetTemplate.Models.DTOs;
using DotnetTemplate.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetTemplate.Models.Profiles
{
    public class TestProfile : Profile
    {
        public TestProfile()
        {
            CreateMap<TestEntity, TestResponse>();
            CreateMap<TestResponse, TestEntity>();

            CreateMap<TestRequest, TestEntity>();
            CreateMap<TestEntity, TestRequest>();
        }
    }
}

using DotnetTemplate.Data;
using DotnetTemplate.Models.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Session;
using Microsoft.AspNetCore.Http;
using DotnetTemplate.Models;
using DotnetTemplate.Models.Entities;

namespace DotnetTemplate.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext dbContext;

        public UserService(ApplicationDbContext context) {
            dbContext = context;
        }

        public UserEntity Login(LoginRequest user, HttpContext context) {
            int response = 0;
            UserEntity userEnt = new UserEntity();

            try
            {
                SHA256Managed sha = new SHA256Managed();
                byte[] data = Encoding.Default.GetBytes(user.Password);
                byte[] ciData = sha.ComputeHash(data);
                string ciPassword = BitConverter.ToString(ciData).Replace("-", "");
                var userItem = dbContext.UserItems.FirstOrDefault(p => p.Username == user.Username && p.Password == ciPassword);
                response = userItem != null ? 1 : 0;

                if (response == 1) {
                    context.Session.SetString("user", userItem.Id.ToString());
                    userEnt.Id = userItem.Id;
                    userEnt.Username = userItem.Username;
                }
                else {
                    userEnt.Id = new Guid();
                    userEnt.Username = "";
                }

                return userEnt;
            }
            catch (Exception ex) {
                return new UserEntity() { 
                    Id = new Guid(),
                    Username = "",
                };
            }
        }

        public UserEntity Register(LoginRequest user)
        {
            int response = 0;
            UserEntity userEnt = new UserEntity();

            try
            {
                SHA256Managed sha = new SHA256Managed();
                byte[] data = Encoding.Default.GetBytes(user.Password);
                byte[] ciData = sha.ComputeHash(data);
                string ciPassword = BitConverter.ToString(ciData).Replace("-", "");
                userEnt.Id = Guid.NewGuid();
                userEnt.IsActive = true;
                userEnt.Password = ciPassword;
                userEnt.Username = user.Username;

                dbContext.UserItems.Add(userEnt);
                dbContext.SaveChanges();

                return userEnt;
            }
            catch (Exception ex)
            {
                return new UserEntity()
                {
                    Id = new Guid(),
                    Username = "",
                };
            }
        }

        public Security GetSessionVariable(HttpContext context) {
            Security sec = new Security();
            string sessionVar = context.Session.GetString("user");
            if (string.IsNullOrEmpty(sessionVar))
            {
                sec.Value = "";
            }
            else {
                sec.Value = sessionVar;
            }

            return sec;

        }

        public Security CloseSession(HttpContext context)
        {
            Security sec = new Security();
            try
            {
                context.Session.Remove("user");
                sec.Value = "OK";
            }
            catch (Exception ex) {
                sec.Value = ""; 
            }
            return sec;
        }
    }
}

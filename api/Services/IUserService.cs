using System.Collections.Generic;
using api.Models;

namespace api.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User CreateUser(User user);
    }
}

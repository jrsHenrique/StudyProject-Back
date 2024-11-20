using System.Collections.Generic;
using YourNamespace.Models;

namespace YourNamespace.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User CreateUser(User user);
    }
}

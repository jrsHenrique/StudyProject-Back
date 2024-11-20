using System.Collections.Generic;
using YourNamespace.Models;

namespace YourNamespace.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User CreateUser(User user);
    }
}

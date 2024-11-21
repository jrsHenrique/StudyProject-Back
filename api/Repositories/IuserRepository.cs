using System.Collections.Generic;
using api.Models;

namespace api.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        User CreateUser(User user);
    }
}

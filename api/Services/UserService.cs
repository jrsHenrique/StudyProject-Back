using System.Collections.Generic;
using YourNamespace.Models;
using YourNamespace.Repositories;

namespace YourNamespace.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public IEnumerable<User> GetAllUsers() => _userRepository.GetAllUsers();

        public User GetUserById(int id) => _userRepository.GetUserById(id);

        public User CreateUser(User user) => _userRepository.CreateUser(user);
    }
}

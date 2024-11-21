using System.Collections.Generic;
using api.Models;
using api.Repositories;

namespace api.Services
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

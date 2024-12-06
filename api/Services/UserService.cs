using api.Models;
using api.Repositories;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher _passwordHasher;

        public UserService(IUserRepository userRepository, IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
        }

        public IEnumerable<User> GetAllUsers() => _userRepository.GetAllUsers();

        public User GetUserById(int id) => _userRepository.GetUserById(id);

        public User CreateUser(User user) => _userRepository.CreateUser(user);

        public User ValidateUser(string email, string password)
        {
            var user = _userRepository.GetAllUsers().FirstOrDefault(u => u.Email == email);
            if (user != null && _passwordHasher.VerifyPassword(password, user.Password))
            {
                return user;
            }
            return null;
        }
    }
}

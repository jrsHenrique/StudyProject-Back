using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("User")]  // Especifica que esta classe será mapeada para a tabela "Users"
    public class User
    {
        public int Id { get; set; }  // Primary Key

        [Required]
        [StringLength(100)]  // Limita o tamanho do nome do usuário
        public string Name { get; set; }  // User Name

        [Required]
        [EmailAddress]
        [StringLength(150)]  // Limita o tamanho do e-mail
        public string Email { get; set; }  // Unique Email

        [Required]
        [StringLength(100)]  // Limita o tamanho da senha
        public string Password { get; set; }  // User Password (deve ser criptografada)

        [Phone]
        [StringLength(15)]  // Limita o tamanho do telefone
        public string? Phone { get; set; }  // Optional Phone Field

        // Navigation property for related products
        public List<Product> Products { get; set; } = new List<Product>();
    }
}

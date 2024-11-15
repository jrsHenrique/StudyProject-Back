// productController.js
const db = require('../config/db'); // Certifique-se de ter a conexão com o banco de dados

// Função para criar um novo produto
const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;

  // Verifica se todos os campos obrigatórios estão presentes
  if (!name || !description || !price || !quantity) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  try {
    // Insere o produto no banco de dados
    await db.query(
      'INSERT INTO products (name, description, price, quantity) VALUES (?, ?, ?, ?)',
      [name, description, price, quantity]
    );
    
    // Resposta de sucesso
    res.status(201).json({ message: "Produto inserido com sucesso!" });
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
    res.status(500).json({ message: "Erro ao inserir o produto. Tente novamente." });
  }
};

module.exports = { createProduct };

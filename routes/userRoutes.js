const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Arquivo de conexão com o banco de dados

// Rota para o cadastro de usuários
router.post('/cadastro', async (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  try {
    // Insere os dados no banco de dados
    await db.query(
      'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)',
      [nome, email, senha, telefone]
    );

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro ao cadastrar usuário. Tente novamente.' });
  }
});

// Exporte o router para ser usado no app principal
module.exports = router;

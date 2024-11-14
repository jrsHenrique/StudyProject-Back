// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sql } = require('../config/db');

// Registrar usuário
exports.registerUser = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Inserir usuário no banco de dados
    const request = new sql.Request();
    await request
      .input('nome', sql.NVarChar, nome)
      .input('email', sql.NVarChar, email)
      .input('senha', sql.NVarChar, hashedPassword)
      .query('INSERT INTO Users (nome, email, senha) VALUES (@nome, @email, @senha)');

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário', error });
  }
};

// Login do usuário
exports.loginUser = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const request = new sql.Request();
    const result = await request
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    const user = result.recordset[0];
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    // Verificar a senha
    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login realizado com sucesso', token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Endpoint para receber o cadastro de usuário
app.post('/api/cadastro', (req, res) => {
  const { nome, email, senha, telefone } = req.body;

  // Aqui você pode salvar os dados no banco de dados
  // Exemplo com MongoDB:
  // const novoUsuario = new Usuario({ nome, email, senha, telefone });
  // novoUsuario.save();

  console.log('Dados recebidos:', req.body);
  res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

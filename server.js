const express = require("express");
const axios = require("axios");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

const axiosInstance = axios.create({
  httpsAgent: new (require('https').Agent)({  
    rejectUnauthorized: false  // Ignora a verificação do certificado SSL
  })
});

const app = express();
const port = 5000;

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API",
      version: "1.0.0",
      description: "Documentação da API",
    },
    servers: [
      {
        url: `http://localhost:${port}`, // URL para acessar a API Node.js
      },
    ],
  },
  apis: ["./server.js"], // Caminho para as anotações Swagger
};

app.use(cors());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware para parsear dados JSON
app.use(express.json());

// Rota de inserção de usuário
/**
 * @swagger
 * /insert-user:
 *   post:
 *     summary: Inserir um novo usuário
 *     description: Insere um novo usuário no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso
 *       500:
 *         description: Erro ao criar o usuário
 */
app.post("/insert-user", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Simulando envio para API C#
    const response = await axiosInstance.post("http://localhost:5132/api/users", {
      name,
      email,
      password,
      phone,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao inserir usuário:", error.response || error);
    res.status(500).json({ message: "Erro ao inserir usuário", error });
  }
});

// Rota de inserção de produto
/**
 * @swagger
 * /insert-product:
 *   post:
 *     summary: Inserir um novo produto
 *     description: Insere um novo produto no banco de dados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *               price:
 *                 type: number
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produto criado com sucesso
 *       500:
 *         description: Erro ao criar o produto
 */
app.post("/insert-product", async (req, res) => {
  try {
    const { productName, price, userId } = req.body;

    // Simulando envio para API C#
    const response = await axiosInstance.post("http://localhost:5132/api/products", {
      productName,
      price,
      userId,
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Erro ao inserir produto:", error.response || error);
    res.status(500).json({ message: "Erro ao inserir produto", error });
  }
});

// Rota de login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Fazer login
 *     description: Faz login verificando as credenciais.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro ao fazer login
 */
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Verifique se o email e senha foram fornecidos
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  try {
    // Enviar a requisição para a API C# que valida as credenciais
    const response = await axiosInstance.post("http://localhost:5132/api/login", {
      email,
      password,
    });

    // Se a resposta for bem-sucedida, o login é bem-sucedido
    if (response.status === 200) {
      res.json({ message: 'Login bem-sucedido', data: response.data });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error.response || error);
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
});


// Rota inicial
/**
 * @swagger
 * /:
 *   get:
 *     summary: Rota inicial
 *     description: Retorna uma mensagem de boas-vindas.
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API!");
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Documentação Swagger disponível em http://localhost:${port}/api-docs`);
});

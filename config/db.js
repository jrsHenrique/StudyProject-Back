require('dotenv').config();  // Carregar variáveis de ambiente

const sql = require('mssql');

// Configuração do banco de dados extraída do .env
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,  // Certifique-se de que esta variável está correta
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 1434,  // Usando a porta 1434 por padrão, se não for especificada
  options: {
    encrypt: true,  // Usar SSL
    enableArithAbort: true,
    trustServerCertificate: true,  // Para confiar no certificado do servidor
  },
};

const connectDB = async () => {
  try {
    await sql.connect(dbConfig);  // Conectar ao banco com a configuração
    console.log('Conectado ao SQL Server');
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
    process.exit(1);
  }
};

console.log('Conectando ao SQL Server...');
connectDB();

module.exports = { sql, connectDB };

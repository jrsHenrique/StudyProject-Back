// config/db.js
const sql = require('mssql');
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // Use SSL
    enableArithAbort: true
  }
};

const connectDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Conectado ao SQL Server');
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
    process.exit(1);
  }
};

module.exports = { sql, connectDB };

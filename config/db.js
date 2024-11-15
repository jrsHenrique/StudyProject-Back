// config/db.js
const { trusted } = require('mongoose');
const sql = require('mssql');
require('dotenv').config();


const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: 1434,
  options: {
    encrypt: true, // Use SSL
    enableArithAbort: true,
    trustedConnection: true,
    trustServerCertificate: true,
  }
};

const connectDB = () => {
  try {
    sql.connect(dbConfig);
    console.log('Conectado ao SQL Server');
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
    process.exit(1);
  }
};

console.log('Conectando ao SQL Server...');

connectDB();

module.exports = { sql, connectDB };

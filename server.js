// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authenticateToken = require('./middleware/authenticateToken'); // Middleware for JWT validation

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);              // User-related routes
app.use('/api/products', authenticateToken, productRoutes); // Product routes, protected by JWT

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

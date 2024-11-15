const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const { createProduct } = require('../controllers/productController');

router.post('/produto', authenticateToken, createProduct);

module.exports = router;

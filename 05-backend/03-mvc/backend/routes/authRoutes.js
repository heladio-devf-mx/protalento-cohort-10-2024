const express = require('express');
const { register, login } = require('../controllers/authController');


const authRoutes = express.Router();

authRoutes.post('/auth/login', login);
authRoutes.post('/auth/register', register);

module.exports = authRoutes;

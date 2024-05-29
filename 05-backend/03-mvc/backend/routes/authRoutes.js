const express = require('express');
const { register, login } = require('../controllers/authController');


const authRoutes = express.Router();

authRoutes.get('/auth/login', login);
authRoutes.get('/auth/register',register);

module.exports = authRoutes
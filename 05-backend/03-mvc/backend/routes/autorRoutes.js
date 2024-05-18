const express = require('express');
const autorController = require('../controllers/autorController');

const autorRoutes = express.Router();

autorRoutes.get('/autores', autorController.getAllAutores);

module.exports = autorRoutes
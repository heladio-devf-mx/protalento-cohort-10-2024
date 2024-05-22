const express = require('express');
const libroController = require('../controllers/libroController');

const libroRoutes = express.Router();

libroRoutes.get('/libros', libroController.getAllLibros);

module.exports = libroRoutes;
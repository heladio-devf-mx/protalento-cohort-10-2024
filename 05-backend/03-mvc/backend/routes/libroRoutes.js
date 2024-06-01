const express = require('express');
const { validateToken } = require('../middlewares/jwt_validation');
const libroController = require('../controllers/libroController');
const dotenv = require('dotenv');

dotenv.config(); // Configurar dotenv

const libroRoutes = express.Router();

// Create / Creación o Inserción
libroRoutes.post('/libros', validateToken(process.env.SECRET), libroController.createLibro);
// Read / Consulta
libroRoutes.get('/libros', libroController.getAllLibros);

module.exports = libroRoutes;
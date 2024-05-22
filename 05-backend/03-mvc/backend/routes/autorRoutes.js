const express = require('express');
const autorController = require('../controllers/autorController');

const autorRoutes = express.Router();
// Create / Creación o Inserción
// Read / Consulta
autorRoutes.get('/autores', autorController.getAllAutores);

// Update / Actualización
// Delete / Eliminación

module.exports = autorRoutes
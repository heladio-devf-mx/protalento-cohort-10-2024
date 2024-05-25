const express = require('express');
const autorController = require('../controllers/autorController');

const autorRoutes = express.Router();
// Create / Creación o Inserción
autorRoutes.post('/autores', autorController.createAutor);

// Read / Consulta
autorRoutes.get('/autores', autorController.getAllAutores);

// ReadOne / Consulta de un solo autor
autorRoutes.get('/autores/:autorId', autorController.getOneAutor);

// Update / Actualización
autorRoutes.patch('/autores/:autorId', autorController.updateAutor);

// Delete / Eliminación
autorRoutes.delete('/autores/:autorId', autorController.deleteAutor); // Soft

autorRoutes.delete('/autores/destroy/:autorId', autorController.destroyAutor); // Hard


module.exports = autorRoutes;

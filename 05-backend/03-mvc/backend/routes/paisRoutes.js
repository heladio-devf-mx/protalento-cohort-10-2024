const express = require("express");
const { getAllPaises, getEstadosDePais } = require("../controllers/paisController");
const paisRoutes = express.Router();

paisRoutes.get("/paises", getAllPaises);
paisRoutes.get("/estados/:pais", getEstadosDePais);

module.exports = paisRoutes
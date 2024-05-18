// 1. Llamar la biblioteca express
const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const autorRoutes = require("./routes/autorRoutes");
const libroRoutes = require("./routes/libroRoutes");

// 2. Crear una instancia de express
const app = express();

app.use(cors());
app.use(express.json()); // json me permite recibir información en formato json

// Conectar Base de datos
db.connect();

// 3. Declarar una ruta
app.get("/", (req, res) => {
  // req -> request
  // res -> response

  console.log(req);

  // Obtener dirección IP
  console.log(req.ip);

  res.send(`Hola ${req.query.name}`);
});

// Rutas
app.use('/api/v1', autorRoutes)
app.use("/api/v1", libroRoutes);


// 4. Lanzar el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

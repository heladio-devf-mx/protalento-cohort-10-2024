const express = require("express");
const router = express.Router();

const productos = [
  {
    id: 1,
    name: "Escuadra",
    price: 123.45,
    image:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    id: 2,
    name: "Calculadora roja",
    price: 234.56,
    image:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    id: 3,
    name: "Calculadora verde",
    price: 234.56,
    image:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    id: 4,
    name: "Globo Terraqueo",
    price: 345.67,
    image:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
];

// Regresar todos los productos
router.get("/api/v1/productos", (req, res) => {

  let query = req.query;

  // query.search

  let filteredProductos = productos;
  
  if(req.query.search) {
    filteredProductos = productos.filter((producto) =>
      producto.name.includes(query.search)
    );
  }

  if (filteredProductos.length == 0) {
    res.status(404).send({ data: [] });
  } else {
    res.send({ data: filteredProductos });
  }
});

// Regresar un solo producto
router.get("/api/v1/productos/:id", (req, res) => {
  let id = req.params.id;
  let producto = productos.find((producto) => producto.id == id);

  if (producto) {
    // validar que exista el producto, recordemos que undefined == false
    res.send({ data: producto });
    // res.status(200).send({ data: producto });
  } else {
    res.status(404).send({ error: "No se encontro el producto" });
  }
});

module.exports = router;

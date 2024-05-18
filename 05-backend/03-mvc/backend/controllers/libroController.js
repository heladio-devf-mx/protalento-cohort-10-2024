const Libro = require("../models/Libros")

const getAllLibros = async (req, res) => {
  const libros = await Libro.find({})
  res.send({ data: libros })
}

module.exports = { getAllLibros }
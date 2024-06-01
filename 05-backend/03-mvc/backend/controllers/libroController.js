const Libro = require("../models/Libros");

// Create new book
const createLibro = async (req, res) => {
  const libro = new Libro(req.body);
  await libro.save();
  res.send({ data: libro });
}

// Get all
const getAllLibros = async (req, res) => {
  const libros = await Libro.find({ year: 1968 });
  res.send({ data: libros });
}

// Update libro

module.exports = { getAllLibros, createLibro }
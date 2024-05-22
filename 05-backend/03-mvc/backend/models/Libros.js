const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String, // atributo / campo
    required: true, // constraint
  },
  autor: {
    type: mongoose.Schema.ObjectId,
    ref: "autores",
    required: true
  }
});

const Libro = mongoose.model("libros", libroSchema);

module.exports = Libro;
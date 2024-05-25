const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: {
    type: String, // atributo / campo
    required: true, // constraint
  },
  autor: {
    type: mongoose.Schema.ObjectId, // identificador del autor
    ref: "autores",
    required: true
  },
  pais: {
    type: String
  },
  genero: { 
    type: String,
    required: true,
    enum: ["Novela", "Cuento", "Ciencia Ficción"] // enum indica una lista de posibles valores
  }
}, { timestamps: true });

const Libro = mongoose.model("libros", libroSchema);

module.exports = Libro;
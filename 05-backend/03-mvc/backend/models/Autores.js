const mongoose = require("mongoose");

// 1. Definir el esquema
const autorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true
  },
  vive: {
    type: Boolean,
    default: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });
 // timestamps: true agrega createdAt y updatedAt

// cuándo se insertan los documentos
// cuándo se modificaron la última vez

// 2. Crear el modelo

// mongose.model(<nombre de la coleccion>, <esquema>)
const Autor = mongoose.model("autores", autorSchema);

module.exports = Autor;
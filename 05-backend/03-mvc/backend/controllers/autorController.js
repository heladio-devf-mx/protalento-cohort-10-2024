const Autor = require("../models/Autores")

const getAllAutores = async (req, res) => {
  const autores = await Autor.find({})
  res.send({ data: autores })
}

module.exports = { getAllAutores }
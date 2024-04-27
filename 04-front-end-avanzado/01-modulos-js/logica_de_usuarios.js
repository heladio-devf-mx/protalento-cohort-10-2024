// usuario = {
//     nombre: string,
//     apellidos: string,
//     edad: number,
//     genero: string
// }

function obtenerApellidos(usuario) {
  return usuario.apellidos
}

function obtenerEdad(usuario) {
  return usuario.edad
}

function obtenerGenero(usuario) {
  return usuario.genero
}

module.exports = {
  obtenerApellidos,
  obtenerEdad,
  obtenerGenero
}
const logica_de_usuarios = require('./logica_de_usuarios')

let usuario = {
  nombre: "Javier",
  apellidos: "Cortes Torres",
  edad: 18,
  genero: "masculino"
}

console.log(logica_de_usuarios.obtenerApellidos(usuario));

console.log(logica_de_usuarios);
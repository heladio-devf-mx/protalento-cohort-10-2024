import { obtenerEdad } from "./logica_de_usuarios.mjs";

let usuario = {
  nombre: "Javier",
  apellidos: "Cortes Torres",
  edad: 18,
  genero: "masculino"
}

console.log(obtenerEdad(usuario));
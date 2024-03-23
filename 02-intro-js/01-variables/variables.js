console.log("******** Variables ********");
/* 
  Scope / alcance / (ambiente)
  global
*/
// Declarar una variable:
// 1. crear la variable con su nombre
// 2. asignarle un valor (están inicializadas)
var nombreMujer = "Sara";
var nombreHombre = "Matías";
var nombre; // var es viejito
// let es el nuevo var
let mascota = "perro";
// Declarar una (variable) constante
/*
  No es posible asignar otro valos a una variable de tipo constante.
*/
const diaLunes = "Lunes";
const LUNES = "Lunes";

console.log("Algunos nombres más comunes en Colombia:");
console.log(nombreMujer);
console.log(nombreHombre);
console.log(mascota);

console.log("Otros nombres comunes en Colombia:");
// actualizar el contenido de las variables:
nombreMujer = "María";
nombreHombre = "Felipe";
mascota = "gato";

console.log(nombreMujer);
console.log(nombreHombre);
console.log(mascota);



// diaLunes = "Miércoles";  // Esto genera error

console.log(diaLunes,nombreMujer);

// Bloques de código 
{  // Este bloque tiene un escope/alcance menor al globlal
  let fruta = "plátano";
  var color = "red";  // variada creada dentro del bloque
  var nombresHombre = "Luis, Pepe";
  const nombresMujer = "Ana, Juana";
  

  console.log("Algunos nombres no tan comunes en Colombia:");
  nombreMujer = "Linhet";
  nombreHombre = "Heladio";
  mascota = "Oso polar";

  console.log(nombreMujer); // var
  console.log(nombreHombre);// var
  console.log(mascota); // let

  // let fruta = "plátano";
  console.log(fruta); // let
  pelicula = "Hannibal";
}

var nombreHombre = "Pedro";
/*
let mascota = "pato"; // error
const mascota = "pato"; // error
*/

// se imprime color, que fue creada en un bloque
console.log(color, nombre); // nombre sigue como undefined
console.log(nombresHombre); // se creó con var
console.log(nombresMujer); // es de otro scope/bloque
/*function saludar() {
  console.log("Hola mundo");
}*/
let saludar = function () {
  console.log("Hola mundo");
}

saludar = function () {
  console.log("Hola mundo pero modificado");
}

let sumar = function (a, b) {
  return a + b;
}

saludar();

let num1  = 5;
let num2  = 10;
let string = "hola";
let boolean = true;
let arreglo = [1, 2, 3];
let objeto = {
  nombre: "José Antonio",
  cohorte: 10
}

console.log(sumar(num1, num2));

function saludoConFuncion(funct, nombre) {
  funct(nombre); 
}

function saludoAmigable(nombre) {
  console.log("Hola " + nombre);
}

function saludoNoAmigable(nombre) {
  console.log("Oye tu " + nombre);
}

function saludodeAmigoCercano(nombre) {
  console.log("Hey! :) " + nombre);
}

function superSaludo (nombre) {
  saludoAmigable(nombre);
  saludoNoAmigable(nombre);
  saludodeAmigoCercano(nombre);
}
console.log("------");

saludoConFuncion(saludoAmigable, "José Antonio");
saludoConFuncion(saludoNoAmigable, "José Antonio");
saludoConFuncion(saludodeAmigoCercano, "José Antonio");

saludoConFuncion(superSaludo, "José Antonio");
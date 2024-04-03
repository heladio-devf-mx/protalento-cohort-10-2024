// console.log("** Objects **");

// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

// Genero un arreglo vacío
// var numerosAleatorios = [];
let numerosAleatorios = [];

// Definición de la función de la funcións genera un número aleatorio/al azar
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
console.log("Ejemplo de llamar a la función que genera un número aleatorio.");
console.log(generarNumeroAleatorio(1, 10));
*/

// Generar 10 (20) números aleatorios y guardarlos en el arreglo
// for (<inicialización>; (condición lógica); <actualización>)
for (let contador = 0; contador < 20; contador++) { 
  // numerosAleatorios.push(generarNumeroAleatorio(1, 20));
  // console.log(contador);
  // Cuerpo del ciclo
  // 1. generar un número al azar y
  let numeroAlAzar = generarNumeroAleatorio(1, 20);
  // 2. guardarlos en un array
  numerosAleatorios.push(numeroAlAzar);
}

console.log(numerosAleatorios);

// Imprimir a los elementos del arreglo
for (let posicion = 0; posicion < numerosAleatorios.length; posicion++) {
  // Acceder cada elemento del arreglo por su posición e imprimir
  // numerosAleatorios[posicion];
  console.log(numerosAleatorios[posicion]);
}

// numerosAleatorios[numerosAleatorios.length - 1]
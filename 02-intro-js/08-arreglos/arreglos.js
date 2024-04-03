console.log("** Arreglos JS **");
// Crear un arreglo / Array

[1, 3, 4, 5, 5, 0, 11]; // elementos del mismo tipo

const arregloMixto = [1, 3, 4, "Ana", 5.3, 0, "Luis"]; // elementos del distintos tipos
/*
console.log([1, 3, 4, 5, 5, 0, 11]);
console.log([1, , undefined, null, '', ["uva", "pera"], 11]);
console.log(arregloMixto);
*/
const frutas = ["uva", "pera", "banana", "papaya", "sandía"];
/*
console.log(frutas[2]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas);
*/
// modificar elementos de un arreglo
frutas[2] = "manzana";
/*console.log(frutas);
console.log(typeof frutas);
console.log(`La longitud del arreglo de frutas es ${frutas.length}`); // Interpolación de cadenas
*/

// Arreglos es un tipo complejo (propiedades y métodos)
// push
frutas.push("piña");
frutas.push(3);
// console.log(frutas);
// pop
frutas.pop();
// console.log(frutas);

// unshift (agregar al principio del array)
frutas.unshift("maracuyá");
// console.log(frutas);
// shif, eliminar el primer elemnto (al principio del array)
frutas.shift();
// console.log(frutas);

// split nos devuelve un arreglo.
const mensaje = "Todos los caminos llevan a Roma.";
const messageArray = mensaje.split(" ");
// console.log(messageArray);

// slice (no modifica al arreglo utilizado)
/*console.log(messageArray.slice(2));
console.log(messageArray.slice(2,4));
console.log(messageArray);
*/

// splice (Sí modifica el arreglo que utilicemos)
// 1. devuelve arreglo con los elementos que eliminamos del areglo 

// console.log(frutas);

// ['uva', 'pera', 'manzana', 'papaya', 'sandía', 'piña']
// elimiar elementos del arreglo
// let resultado = frutas.splice(2, 1);
let resultado = frutas.splice(2);
// console.log(`Resultado de elimnar elementos del arreglo ${resultado}`);
// console.log(frutas);

// 2. Nos permita agregar elementos al arreglo en alguna posición, los demás elementos se recorren
// resultado = frutas.splice(1, 0, "pepino", "maracuyá");
// console.log(resultado); // eliminar 0 o más elementos
// console.log((`Resultado de agregar elementos al arreglo ${frutas}`));

// sort (ordenar)
let sortedFruits = ['uva', 'pera', 'manzana', 'papaya', 'Sandía', 'piña'];
console.log(sortedFruits);

// Ordenamiento por caracteres por defecto
const numbersList = [2, 5, 10.1, 1, 3, 46, 70, 34];
console.log("Arreglo desrodenado");
console.log([2.2, 5, 10.1, 50.1, 1, 3, 46, 70, 34]);

console.log("Arreglo odenado incorrectamente (sort por default)");
console.log([2.2, 5, 10.1, 50.1, 1, 3, 46, 70, 34].sort());

console.log("Arreglo ordenado");
console.log([2.2, 5, 10.1, 50.1, 1, 3, 46, 70, 34].sort(function(a, b) {
  // comparación
  let resta = a -b;
  // console.log(resta);
  return resta;
}));

// reverse (invierte los elementos de un arreglo) Sí modifica el arreglo utilizado
console.log(numbersList);
console.log(numbersList.reverse());
console.log(numbersList);

// concat (no modifica los arreglos utilizados) y me devuelve el arreglo nuevo con la unión
// frutas y numbersList
let concatResult = frutas.concat(numbersList).concat(messageArray);
console.log(concatResult);
console.log(frutas);
console.log(numbersList);

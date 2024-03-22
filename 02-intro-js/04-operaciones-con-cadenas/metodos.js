console.log("** Operaciones con cadenas **");

let cadenaEjemplo = "Hola Tarola, BIENVENID@ 44!";
console.log(cadenaEjemplo);

// propiedades 
console.log(cadenaEjemplo.length);

// métodos

// charAt()
console.log(cadenaEjemplo.charAt(1));
console.log(cadenaEjemplo.charAt(11));

// indexOf()
// Devuelve la posición de la primera ocurrencia
console.log(cadenaEjemplo.indexOf('la'));
console.log(cadenaEjemplo.indexOf('r'));
// Devuelve -1 cuando no encuentra la subcadena
console.log(cadenaEjemplo.indexOf('T'));

// replace()
console.log(cadenaEjemplo.replace('la', 'fa'));
console.log(cadenaEjemplo.replace('Hola', 'Adiós'));

// toLowerCase()
console.log(cadenaEjemplo.toLocaleLowerCase());

// toUpperCase()
let cadenaMayusculas = cadenaEjemplo.toUpperCase();
console.log(cadenaMayusculas);

// La cadena original permanece
// console.log(cadenaEjemplo, cadenaMayusculas);

// Hola Tarola, BIENVENID@ 44!

// slice()
let subCadena = cadenaMayusculas.slice(5);
console.log(subCadena);
subCadena = cadenaMayusculas.slice(5, 11);
console.log(subCadena);
// Reemplazar en la cadena palabra
let cadenaFinal = cadenaEjemplo.replace('Tarola', subCadena);
console.log(cadenaFinal);

// split()
// lista de palablas: 
let listaNombres = "Juan, Luis, Sara, María,Jorge";
let resultadoSplit = cadenaEjemplo.split(" ");
console.log(resultadoSplit);

// En este caso, split me devuelve un array/arreglo
// resultadoSplit = listaNombres.split(", ");
resultadoSplit = listaNombres.split(",");
console.log(resultadoSplit);
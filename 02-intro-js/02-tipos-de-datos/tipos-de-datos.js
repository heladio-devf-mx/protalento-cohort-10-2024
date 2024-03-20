console.log("******** Tipos de Datos ********");

// Cadenas de texto (string)
let fruta = "mango";
let color = 'azul';
let juguete = `patineta`; //****

console.log("Ejemplo de cadena");
console.log(fruta, color, juguete);
console.log(typeof(fruta));
console.log(typeof(color));
console.log(typeof(juguete));

// Tipo number (numérico)
8;
15.4;
NaN;

console.log(NaN,typeof(NaN));
console.log(typeof(789));
console.log(typeof(-88));
console.log(typeof(-8.78));

// Booleans
// true / false
console.log(true, typeof(true));
console.log(false, typeof(false));

// Null
console.log(null, typeof(null));
var miVariable = null;
console.log(miVariable);

// Undefined
console.log(undefined, typeof(undefined));
var miVariableIndefinida;
console.log(miVariableIndefinida, typeof(miVariableIndefinida));

// Symbol
var mySymbol = Symbol("soy un símbolo");
console.log(mySymbol, typeof(mySymbol));
// TO DO Buscar un caso de uso...

// Object
const persona = {
  name: "María",
  middleName: "Sara",
  age: 28
};

console.log(persona, typeof persona)



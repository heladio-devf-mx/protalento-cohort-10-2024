console.log("** Operadores Lógicos **");

// And - && (y)

console.log(true && true);  // verdadero
console.log(true && true && true);  // verdadero

console.log(true && false); // falso si alguno de los elementos comparados no es true
console.log(true && false && true); // falso si alguno de los elementos comparados no es true

// Or - || (o)
console.log("Operador OR");
console.log(true || true);  // verdadero si alguno de los elementos comparados es true (verdadero)
console.log(true || true || true);  // verdadero si alguno de los elementos comparados es true (verdadero)
console.log(true || true || false);  // verdadero si alguno de los elementos comparados es true (verdadero)
console.log(false || false || false); // false (falso) si todos los elementos son falsos
console.log(false || false); // false (falso) si todos los elementos son falsos

console.log("Falsy / Falso");
// Boolean(valor);  // devolver la representación lógica (true/false)
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log("Ejemplos con Falsy / Falso");
console.log(Boolean(undefined) && true);
// console.log(false && true);
console.log("Truthy / Verdaderos");
console.log(Boolean(true));
console.log(Boolean({})); // objeto  vacío
console.log(Boolean([])); // arreglo vacío
console.log(Boolean(44));
console.log(Boolean(-44));
console.log(Boolean("0"));
console.log(Boolean('false'));
console.log("Ejemplos con truthy");
console.log(Boolean([]) && true); // true
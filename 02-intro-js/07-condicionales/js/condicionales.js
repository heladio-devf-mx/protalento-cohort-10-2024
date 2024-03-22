console.log("** Condicionales **");

// Si hoy es lunes, no tengo clase de JS
/*
 If (hoy es lunes) { 
  no tengo clase de JS
  Practico JS
} else {
  No tengo clase
}
*/

let dia = prompt("¿Qué día es hoy?");

if (dia == "lunes") {
  console.log("Practica JS");
  console.log("Descansa");
} else {
  console.log("Tal vez tienes clase");
}

if (dia == "martes") {
  console.log("Día es: " + dia);
}/* else {  // siempre va después de if
  console.log("else con if");
}*/

// Varios if-else
/*
if (dia == "lunes") {
  // console.log("Descansa");
  // console.log("Practica JS");
  console.log("Avanza con tu proyecto");
} else if (dia == "martes") {
  console.log("Tienes clase de JS!");
} else if (dia == "miércoles") {
  console.log("Practica JS");
  console.log("Avanza con tu proyecto");
} else if (dia == "jueves") {
  console.log("Tienes clase de JS otra vez!");
} else {
  // último de los casos, si todo es falso
  console.log("No tienes clase con Heladio");
  console.log("Puedes hacer lo que quieras");
}
*/
// Combinaciónes de las condiciones
if (dia == "lunes" || dia == "miércoles" || dia == "viernes" || dia == "domingo") {
  console.log("Descansa");
  console.log("Practica JS");
  console.log("Avanza con tu proyecto");
} else if (dia == "martes" || dia == "jueves") {
  console.log("Tienes clase de JS con Heladio!");
} else {
  // último de los casos, si todo es falso
  console.log("No tienes clase con Heladio");
  console.log("Tienes clase con Miguel Angel");
}
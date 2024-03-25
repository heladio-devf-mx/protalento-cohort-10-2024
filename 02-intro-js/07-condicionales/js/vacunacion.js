console.log("*** Vacunación ***");

var mayoriaDeEdad = 18
// Información de la persona que quiere saber si se puede vacunar
var edad = prompt("¿Cuál es tu edad?"); // 32
var genero = prompt("¿Cuál es tu sexo biológico?"); // Hombre, Mujer
var esEmbarazada = prompt("¿Estás embarazada?"); // Si, No
// hombre o mujer
// edad
// si mujer estás embarazada

if(edad >= 18) {
  console.log("Se puede vacunar");
} else if (genero == "Mujer" && esEmbarazada == "Si") {
  console.log("Se puede vacunar");
} else if (edad < 18 || edad >= 50) {
  console.log("Se puede vacunar");
} else {
  console.log("No se puede vacunar");
}

// ----------------------------------

var mayorA18 = edad >= 18;
var mujerEmbarazada = genero == "Mujer" && esEmbarazada == "Si";
var menorA18_O_mayorA50 = edad < 18 || edad >= 50;

if(mayorA18) {
  console.log("Se puede vacunar");
} else if (mujerEmbarazada) {
  console.log("Se puede vacunar");
} else if (menorA18_O_mayorA50) {
  console.log("Se puede vacunar");
} else {
  console.log("No se puede vacunar");
}

// ----------------------------------

if(mayorA18 || mujerEmbarazada || menorA18_O_mayorA50) {
  console.log("Se puede vacunar");
} else {
  console.log("No se puede vacunar");
}

// imprimir el resultado
// true: se puede vacunar (cumple algún requisito)
// false: no se puede vacunar si no cumple ninún requisito
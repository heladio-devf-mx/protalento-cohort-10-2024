var admin1 = "mackaber";
var admin2 = "heladio";


var user = prompt("Cual es tu usuario?");

if(user == admin1) { 
  console.log("Tienes acceso");
} else if (user == admin2) {
  console.log("Tienes acceso");
} else {
  console.log("No tienes acceso");
}

// -----------------

if (user == admin1 || user == admin2) {
  console.log("Tienes acceso");
}else {
  console.log("No tienes acceso");
}

// -------------------

if(user == admin1) { 
  console.log("Tienes acceso");
} 

if (user == admin2) {
  console.log("Tienes acceso");
}

if (user != admin1 || user != admin2) {
  console.log("No tienes acceso");
}
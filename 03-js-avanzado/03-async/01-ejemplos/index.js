
function despues() {
  console.log("Pasaron 5 segundos");
}

console.log("Antes  del setTimeout");
setTimeout(despues, 5000);
console.log("Despues del setTimeout");

/*
function setTimeout(funcion, tiempo) {
  console.log("setTimeout");
  esperar(tiempo);
  funcion();
}*/


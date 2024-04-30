const operaciones = require("./operaciones");

function desplegar_interfaz() {
  console.log("Bienvenido a walmart");
  console.log("Introduzca un nuevo articulo:");
  let articulo = prompt("Articulo: ");
  lista_de_articulos.push(articulo);

  console.log("Introduzca el precio del articulo:");
  let precio = prompt("Precio: ");
  lista_de_precios.push(precio);

  // calcular el total
  operaciones.calcular_total();
}
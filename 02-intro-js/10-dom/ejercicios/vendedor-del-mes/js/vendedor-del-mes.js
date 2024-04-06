let precios = {
  aqua: 200,
  emocion: 180,
  alegria: 160,
  frescura: 150
};

let ventas_juana = {};
let ventas_pedro = {};

function preguntar() {
  let ventas = {};
  let cantidad_aqua = prompt("Ingrese la cantidad vendida de Aqua");
  let cantidad_emocion = prompt("Ingrese la cantidad vendida de Emocion");
  let cantidad_alegria = prompt("Ingrese la cantidad vendida de Alegria");
  let cantidad_frescura = prompt("Ingrese la cantidad vendida de Frescura");

  ventas.aqua = cantidad_aqua;
  ventas.emocion = cantidad_emocion;
  ventas.alegria = cantidad_alegria;
  ventas.frescura = cantidad_frescura;

  return ventas // { aqua: 10, emocion: 20, alegria: 30, frescura: 40 }
}

function calcularVentas(ventas) {
  ventas.aqua * precios.aqua; // cantidad * precio
  let total_ventas = 0;
  total_ventas += ventas.aqua * precios.aqua;
  total_ventas += ventas.emocion * precios.emocion;
  total_ventas += ventas.alegria * precios.alegria;
  total_ventas += ventas.frescura * precios.frescura;
  console.log(total_ventas);  

  return total_ventas
}
 
function agregarVentasJuana() {
  console.log("agregando ventas Juana");

  alert("Ingrese datos de venta de Juana");
  ventas_juana = preguntar();
}

function agregarVentasPedro() {
  console.log("agregando ventas Pedro");

  alert("Ingrese datos de venta de Pedro");
  ventas_pedro = preguntar();
}

function calcularVendedorDelMes() {
  console.log("calculando vendedor del mes");

  let total_ventas_juana = calcularVentas(ventas_juana);
  let total_ventas_pedro = calcularVentas(ventas_pedro);  

  // Hacer la comparación
  if(total_ventas_juana == total_ventas_pedro) {
    console.log("Empate entre Juana y Pedro");
  } else if(total_ventas_juana > total_ventas_pedro) {
    console.log("Juana es el vendedor del mes");
  } else {
    console.log("Pedro es el vendedor del mes");
  }
}
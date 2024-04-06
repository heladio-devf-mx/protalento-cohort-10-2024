let precios = {
  aqua: 200,
  emocion: 180,
  alegria: 160,
  frescura: 150
};

let ventas_juana = {};
let ventas_pedro = {};

function agregarVentasJuana() {
  console.log("agregando ventas Juana");

  alert("Ingrese datos de venta de Juana");
  let cantidad_aqua = prompt("Ingrese la cantidad vendida de Aqua");
  let cantidad_emocion = prompt("Ingrese la cantidad vendida de Emocion");
  let cantidad_alegria = prompt("Ingrese la cantidad vendida de Alegria");
  let cantidad_frescura = prompt("Ingrese la cantidad vendida de Frescura");

  ventas_juana = {
    aqua: cantidad_aqua,
    emocion: cantidad_emocion,
    alegria: cantidad_alegria,
    frescura: cantidad_frescura,
  };

}

function agregarVentasPedro() {
  console.log("agregando ventas Pedro");

  alert("Ingrese datos de venta de Pedro");
  let cantidad_aqua = prompt("Ingrese la cantidad vendida de Aqua");
  let cantidad_emocion = prompt("Ingrese la cantidad vendida de Emocion");
  let cantidad_alegria = prompt("Ingrese la cantidad vendida de Alegria");
  let cantidad_frescura = prompt("Ingrese la cantidad vendida de Frescura");

  ventas_pedro.aqua = cantidad_aqua;
  ventas_pedro.emocion = cantidad_emocion;
  ventas_pedro.alegria = cantidad_alegria;
  ventas_pedro.frescura = cantidad_frescura;
}

function calcularVendedorDelMes() {
  console.log("calculando vendedor del mes");

  let total_ventas_juana =  ventas_juana.aqua * precios.aqua // cantidad * precio
  total_ventas_juana += ventas_juana.emocion * precios.emocion
  total_ventas_juana += ventas_juana.alegria * precios.alegria
  total_ventas_juana += ventas_juana.frescura * precios.frescura
  console.log(total_ventas_juana);  

  let total_ventas_pedro = ventas_pedro.aqua * precios.aqua
  total_ventas_pedro += ventas_pedro.emocion * precios.emocion
  total_ventas_pedro += ventas_pedro.alegria * precios.alegria
  total_ventas_pedro += ventas_pedro.frescura * precios.frescura
  console.log(total_ventas_pedro);

  // Hacer la comparación
  if(total_ventas_juana == total_ventas_pedro) {
    console.log("Empate entre Juana y Pedro");
  } else if(total_ventas_juana > total_ventas_pedro) {
    console.log("Juana es el vendedor del mes");
  } else {
    console.log("Pedro es el vendedor del mes");
  }
}
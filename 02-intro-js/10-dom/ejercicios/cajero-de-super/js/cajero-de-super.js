let lista_super = [];

function agregar() {
  let nombre = document.getElementById("nombre")
  let cantidad = document.getElementById("cantidad")
  let precio = document.getElementById("precio")

  nombre.value 

  console.log(`Nombre: ${nombre.value}, Cantidad: ${cantidad.value}, Precio: ${precio.value}`);

  let total = cantidad.value * precio.value
  lista_super.push(total); // solo cantidades totales

  nombre.value = "";
  cantidad.value = "";
  precio.value = "";
}

function calcular() {
  let total = 0
  for (let i = 0; i < lista_super.length; i++) {
    total += lista_super[i]
  }

  document.getElementById("total").innerHTML = "EL TOTAL ES: $" + total

  /*document.getElementById("total").innerHTML = `
  <div class="">
    <p>EL TOTAL ES: </p>
    <p>$${total}</p>
  </div>`*/	
}
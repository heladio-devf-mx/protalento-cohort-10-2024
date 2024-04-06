let lista_super = [];

function agregar() {
  let nombre = document.getElementById("nombre").value
  let cantidad = document.getElementById("cantidad").value
  let precio = document.getElementById("precio").value

  console.log(`Nombre: ${nombre}, Cantidad: ${cantidad}, Precio: ${precio}`)

  let total = cantidad * precio
  lista_super.push(total); // solo cantidades totales
}

function calcular() {
  let total = 0
  for (let i = 0; i < lista_super.length; i++) {
    total += lista_super[i]
  }
  alert(`Total: ${total}`)
}
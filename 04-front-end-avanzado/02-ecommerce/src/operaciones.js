function calcular_el_total(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total += lista[i].precio;
  }
  return total;
}

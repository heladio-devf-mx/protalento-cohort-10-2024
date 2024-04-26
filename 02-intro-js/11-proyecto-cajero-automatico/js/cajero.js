console.log("Cajero de MEXICOL!");
// Reccuperar la cuenta del usuario
const cuenta = JSON.parse(localStorage.getItem("cuentaUsuario"));
// Mostar nombre del usuario
const nombreUsuario = document.getElementById("nombre-usuario");
nombreUsuario.textContent = "Hola " + cuenta.nombre;
console.log(cuenta);

// Consultar
const botonConsulta = document.getElementById("boton-saldo");
botonConsulta.addEventListener("click", () => {
  // Recuperar el elemento del resultado
  const resultadoElement = document.getElementById("resultado_container");
  resultadoElement.innerHTML = `Tu saldo es <strong>$ ${cuenta.saldo.toFixed(2)}</strong>`;
});
// Depositar

// Retirar
// 
// const botonRetiro = document.getElementById("boton-retirar");
function retirarSaldo() {
  const saldoAntesDelRetiro = cuenta.saldo;
  const saldoRetiro = prompt("Cuanto vas a retirar");
  // ccalcular saldo después del retiro
  const saldoFinal = saldoAntesDelRetiro - saldoRetiro;
  cuenta.saldo = saldoFinal;
  // Moostrar saldo final
  const resultadoElement = document.getElementById("resultado_container");
  resultadoElement.innerHTML = `Tu saldo es <strong>$ ${saldoFinal.toFixed(2)}</strong>`;
  // console.log(retiro);
}

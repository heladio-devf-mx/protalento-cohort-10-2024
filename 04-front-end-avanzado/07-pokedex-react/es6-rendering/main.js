// Los arreglos y como se deben utilizar en React

const miListaDeFrutas = ["manzana", "pera", "naranja", "uva"];

for(let i = 0; i < miListaDeFrutas.length; i++) {
  console.log(miListaDeFrutas[i]);
}

console.log("--------------------------");

miListaDeFrutas.forEach(fruta => console.log(fruta)) // Recorre la lista y es equivalente a un for

miListaDeFrutas.forEach((fruta, i) => console.log(`La fruta ${i} es ${fruta}`))

console.log("--------------------------");

let frutas = miListaDeFrutas.map(fruta => fruta.toUpperCase()) // Recorre la lista y retorna una nueva lista

console.log(frutas);

frutas = miListaDeFrutas.map(fruta => ({ nombre: fruta, tamano: fruta.length})).map(fruta => fruta.tamano) // Recorre la lista y retorna una nueva lista 
console.log(frutas);

console.log("--------------------------");

// Condicionales y como usarlos en react
let edadDeJuanito = 20;


if(edadDeJuanito >= 18) {
  console.log("Juanito es mayor de edad");
} else {
  console.log("Juanito es menor de edad");
}

console.log(edadDeJuanito >= 18 && "Desplegar contenido grafico" || "No desplegar contenido grafico")
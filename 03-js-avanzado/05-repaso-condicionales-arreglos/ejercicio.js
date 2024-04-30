// Ejercicio: De una lista de palabras, determinar cual es la más larga

// 1. Definir (crear vairable) la lista de palabras
let palabras = ["edificio", "mural", "pared", "pintura", "ciudad", "monumento", "patio", "libreterias", "plaza", "edificios"];

// 2. Contar el numero de letras de cada palabra

// 3. Comparar con la palabra más larga hasta el momento
let palabraMasLarga = "";
for(let i = 0; i < palabras.length; i++) { // i = 1
  //palabraMasLarga.length <-> palabras[i].length // palabras[0].length = 8
  if(palabraMasLarga.length < palabras[i].length) { // "edificio" : 8 < monumento : 9
    palabraMasLarga = palabras[i]; // palabraMasLarga = "monumento"
  }
}

console.log(palabraMasLarga)
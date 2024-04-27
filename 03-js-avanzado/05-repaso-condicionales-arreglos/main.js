let arreglo = [1, true, {name: "José Antonio", num_visitas: 0}, "string", 5, 6, 7, 8, 9, 10];

console.log(arreglo[2])

arreglo.push("otro elemento");
console.log(arreglo);

arreglo.unshift("Elemento al inicio");
arreglo.unshift({ name: "Miguel Angel", num_visitas: 5 });

console.log(arreglo);


console.log(arreglo.join("|"));

console.log("-----------------");


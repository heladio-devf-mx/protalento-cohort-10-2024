import Animal from "./Animal.js";
// Instanciar objetos de esta clase:
const ballenas = new Animal("Acuático", "mamíferos", false);
const serpientes = new Animal("Terrestre", "reptil", false);
// los objetos literales 
const literalBallenas = { type: 'Acuático', kingdom: 'mamíferos', isExtint: false };

ballenas.comer();
serpientes.comer();

ballenas.alimento = "algas";
serpientes.alimento = "roedores";

ballenas.comer();
serpientes.comer();

// console.log(ballenas, typeof ballenas);
// console.log(serpientes, typeof serpientes);
// console.log(literalBallenas, typeof literalBallenas);

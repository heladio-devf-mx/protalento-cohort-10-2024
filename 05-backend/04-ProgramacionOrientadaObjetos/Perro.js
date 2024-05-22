import Animal from "./Animal.js";

class Perro extends Animal {
  constructor(extremidades, extint, nombre) {
    // podemos llamar / invocar al constructor de la clase padre
    super("Humano", "mamíferos", extint, "de todo");  // hereda del Animal
    this.legs = extremidades;
    this.name = nombre;
  }

  // sobreescribiendo su metodo
  comer(alimento = "croquetas") {
    console.log(`${this.name} se alimenta de ${alimento}`);
  }

  // setter => es para actualizar propiedades (protegidas)
  actualizarAlimento(nuevoAlimento) {
    this.alimento = nuevoAlimento;
  }
  // getter => Obtener valores de propiedades
  obtenerAlimento() {
    console.log(this.alimento);
  }
}

const Kokoro = new Perro(4, true, "Kokoro");
const Luna = new Perro(4, false, "Luna");

console.log(Kokoro, Luna);
Kokoro.comer();
Luna.comer();
Kokoro.comer("pollito");

// Kokoro.alimento = "taquitos";
Kokoro.actualizarAlimento("taquitos");
Kokoro.obtenerAlimento();
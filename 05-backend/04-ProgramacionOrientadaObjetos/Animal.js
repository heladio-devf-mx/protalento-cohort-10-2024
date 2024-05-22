// Definir una clase con "class" y el nombre
class Animal {
  // Inicializar las instancias de esta clase
  constructor(tipo, reino, estaExtinto, alimento) {
    // this se refiere a la instancia 
    this.type = tipo;
    this.kingdom = reino;
    this.isExtint = estaExtinto;
    this.alimento = alimento;
  }

  // methods
  comer() {
    console.log(`El animal de tipo ${this.type} se alimenta de ${this.alimento}`);
  }
}

export default Animal;
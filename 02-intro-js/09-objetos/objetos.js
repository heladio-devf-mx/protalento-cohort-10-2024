// console.log("** Objects **");

"Esta es una cadena"; // cadena literal
// Objetos literales
// Objeto Literal
{};
// Otro objeto literal
let alumno = {
  nombre: "José", // Key(properties) / values
  cohort: 10,
  estatus: "Activo",
  cursos: ["English", "DevF"],
  yaFinalizo: false,
  direccion: {
    calle: "Reforma",
    numeroExterior: 55,
    cp: "05878"
  },
  // Métodos
  subirProyectoAlCampus: function(urlArchivo, nombreProyecto) {
    // cuerpo de la función
    // ...
    // this se refiere al objeto que estemos usando
    console.log(`${this.nombre}, del cohort ${this.cohort} subió el archivo, ${ urlArchivo } del proyecto "${nombreProyecto}".`);
    // TO DO agregar fecha
  }
};

// Acceder a las propiedades del objeto
// Notación punto
console.log(alumno.nombre);
console.log(alumno.cursos);
console.log(alumno.direccion.cp);
console.log(alumno.subirProyectoAlCampus("https://github.com/heladio-devf-mx/protalento-cohort-10-2024/blob/main/02-intro-js/08-arreglos/campus/ArreglosCampus-Ejercicio1.js", "Arreglos-Ejercicio1"));
console.log("Estatus: " + alumno.estatus);

// Modificación de los valores
alumno.nombre = "José Antonio";
alumno.cursos.unshift("Habilidades socioemocionales");
// eliminar propiedades
delete alumno.estatus;
console.log("Propiedad estatus: " + alumno.estatus);
// Agregar propiedad al objeto
alumno.status = "Pause";
console.log("Propiedad status: " + alumno.status);


// Notación de corchetes ["propiedad"/"metodo"]
let codigoPostal = 'cp';  // nombre de la propiedad
console.log(alumno["nombre"]);
console.log(alumno["direccion"]);
console.log(alumno["codigoPostal"]);
console.log(alumno["direccion"][codigoPostal]);
// console.log(alumno["direccion"]["cp"]);
console.log(alumno["cursos"]);
console.log(alumno["yaFinalizo"]);
console.log(alumno["subirProyectoAlCampus"]("https://github.com/heladio-devf-mx/protalento-cohort-10-2024/blob/main/02-intro-js/08-arreglos/campus/ArreglosCampus-Ejercicio1.js", "Arreglos-Ejercicio1-corchetes"));


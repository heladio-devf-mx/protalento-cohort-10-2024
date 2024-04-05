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
    cp: "05878",
    pais: "Colombia"
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
/*
// Tradicional
let cursosAlumno =  alumno.cursos;  // acceso tradicional
cursosAlumno =  alumno["cursos"];  // acceso tradicional
console.log(cursosAlumno);
// Destructuting / Desestructuración
const { cursos } = alumno;
console.log(cursos);
*/

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

// Alumnos presentes
const studentsOnClass = [
  'Andrés Muñoz', // 0
  'Andrés Camilo', // 1
  'Angela Cárdenas', // 2
  'Brayan David', // 3
  'Dayana Vanessa', // 4
  'Deyber Andrés', // 5
  'José Andrés', // 6
  'José Enrique', // 7
  'Margy Sarria', // 8
  'Marycriz Chica', // 9
  'María José', // 10
  'Sergio Andrés', // 11
  'Carlos Barragán', //12
];
// Tómbola para mostrar los objetos creados
// Arrow Function
const selectStudent = (students = studentsOnClass) => {
  const positionSelected = Math.ceil(Math.random() * students.length);
  console.log("Posición del alumno afortunado: " + positionSelected);
  const luckyStudent = students[positionSelected];
  console.log("Alumno afortunado: " + luckyStudent);
  // Mostrarlo
  const studentElement = document.querySelector('#student-name');
  studentElement.textContent = luckyStudent;
  return luckyStudent;
}

// let alumnoGanador = selectStudent();
// console.log(alumnoGanador);


// Tradicional
let cursosAlumno =  alumno.cursos;  // acceso tradicional
cursosAlumno =  alumno["cursos"];  // acceso tradicional
console.log(cursosAlumno);
// Destructuting / Desestructuración
const { nombre, cursos, direccion } = alumno;
console.log(cursos, direccion);

const { pais, numeroExterior, calle, cp } = alumno.direccion;

// Interpolación de cadena (cadenas de texto + código JS)
console.log(`El alumno ${nombre} vive en la calle ${calle}, número ${numeroExterior}, cp ${cp}, en ${pais} y estudia ${cursos.join(', ')}`);
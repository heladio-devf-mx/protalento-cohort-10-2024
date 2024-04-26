console.log("Cajero de MEXICOL!");

/**
 * BD de usuarios
 * Tabla
 */
const usuarios = [
  { id: 1, nombre: "Mali", userName: "mali", password: "mali123" },
  { id: 2, nombre: "Gerardo", userName: "gera", password: "gera456" },
  { id: 3, nombre: "Maui", userName: "maui", password: "maui789" },
  { id: 3, nombre: "Silvia", userName: "silvia", password: "Silv14" },
];

// const getUsuarios = () => {
//   fetch("./bd/usuarios.json")
//     .then((data) => {
//       console.log(data);
//       return data.json();
//     })
//     .then((jsonData) => console.log(jsonData));
// };
// Maps y Sets (Estructuras de datos)
// TO DO: hacer un API para esas BDs

/**
 * BD de cuentas
 */
const cuentas = [
  { userId: 1, nombre: "Mali", saldo: 200 },
  { userId: 2, nombre: "Gera", saldo: 290 },
  { userId: 3, nombre: "Maui", saldo: 67 },
];

document.addEventListener("DOMContentLoaded", (event) => {
  // console.log(event);
  // 0. Ya se cargó el (contenido) DOM

  // 1. Lógica de login (negocio)
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevenir que se envíe el formulario
    console.log("Intento de inicio de sesión...");

    // Capturamos usuario
    const username = document.getElementById("username").value;
    let resultado_container = document.getElementById("resultado_container");

    // Validacion de usuario
    if (
      usuarios.find((usuario) => usuario.userName === username.toLowerCase().trim())
    ) {
      // Capturamos password
      const passwordinput = document.getElementById("password").value;
      const reguser = usuarios.find(
        (usuario) => usuario.userName === username.toLowerCase().trim()
      );
      // Validar la contraseña
      if (
        usuarios.find(
          (usuario) =>
            usuario.userName === username.toLowerCase().trim() &&
            usuario.password === passwordinput.trim()
        )
      ) {
        console.log("Inicio de sesión exitoso\nBienvenido " + reguser.nombre);

        resultado_container.innerHTML = `<p>Bienvenido ${reguser.nombre}</p>`;
        // limpiar el formulario
        
      } else {
        console.log("Contraseña incorrecta");
        resultado_container.innerHTML = `<p>Contraseña incorrecta</p>`;
        document.getElementById("password").value = ""; // limpiamos el valor del input
      }
    } else {
      console.log("Usuario no encontrado");

      resultado_container.innerHTML = `
            <p>Usuario no encontrado</p>`;
    }
    // 1. Recuperar la información que ingresó el usuario

    // 1.1 Validar que los campos no estén vacíos

    // 2. Validar user name.

    // 3. Validar contraseña.

    // 4. Si no son correctos usuario o contraseña, mostrar error.

    // 5. Si son válidos sus datos, permitirle el acceso a su cuenta.
  });
});

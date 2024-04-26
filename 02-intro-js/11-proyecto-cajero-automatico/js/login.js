console.log("Inicio de sesión de MEXICOL!");

/**
 * BD de usuarios
 * Tabla
 */
const usuarios = [
  { id: 1, nombre: "Mali", userName: "mali", password: "mali123", saldo: 200 },
  { id: 2, nombre: "Gerardo", userName: "gera", password: "gera456", saldo: 20 },
  { id: 3, nombre: "Maui", userName: "maui", password: "maui789", saldo: 50 },
  { id: 3, nombre: "Silvia", userName: "silvia", password: "Silv14", saldo: 100 },
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
        console.log("Inicio de sesión exitoso\nBienvenid@ " + reguser.nombre);
        resultado_container.innerHTML = `<p>Bienvenid@ ${reguser.nombre}</p>`;
        // limpiar el formulario
        loginForm.reset();
        // Guardar información de cuenta en el local Storage
        // Buscar al usuario con un ciclo (como lo hihcieron las compañeras)
        let cuentaUsuario = null; // vacío al principio
        for (let index = 0; index < usuarios.length; index++) {
          if (username.toLowerCase().trim() === usuarios[index].userName) {
            cuentaUsuario = usuarios[index];
            break;  // detener las iteracinoes del for
          }
        }
        // Guardar en local Storage
        cuentaUsuario = JSON.stringify(cuentaUsuario);
        localStorage.setItem("cuentaUsuario", cuentaUsuario);
        // redireccionar al detalle de su cuenta
        setTimeout(
          () => window.location = 'detalleCuenta.html',
          1000
        );
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

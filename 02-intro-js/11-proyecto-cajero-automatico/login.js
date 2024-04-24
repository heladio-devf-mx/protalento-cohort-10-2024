console.log("Cajero de MEXICOL!");

/**
 * BD de usuarios
 * Tabla
 */
const usuarios = [
    { id: 1, userName: "mali", password: 200 },
    { id: 2, userName: "gera", password: 290 },
    { id: 3, userName: "maui", password: 67 },
];

// Maps y Sets (Estructuras de datos)
// TO DO: hacer un API para esas BDs

/**
 * BD de cuentas
 */
const cuentas = [
    { userId: 1, nombre: "Mali", saldo: 200 },
    { userId: 2, nombre: "Gera", saldo: 290 },
    { userId: 3, nombre: "Maui", saldo: 67 }
];

document.addEventListener("DOMContentLoaded", (event) => {
    // console.log(event);
    // 0. Ya se cargó el (contenido) DOM

    // 1. Lógica de login (negocio)
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevenir que se envíe el formulario
        console.log("Intento de inicio de sesión...");
        // 1. Recuperar la información que ingresó el usuario
        
        // 1.1 Validar que los campos no estén vacíos

        // 2. Validar user name.

        // 3. Validar contraseña.

        // 4. Si no son correctos usuario o contraseña, mostrar error.        // 5. Si son válidos sus datos, permitirle el acceso a su cuenta. 
    });
});
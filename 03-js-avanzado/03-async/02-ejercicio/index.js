const repl = require("repl");

usuarioExiste = function(nombre_usuario, callback) {
  setTimeout(() => {
    if(usuarios.find(usuario => usuario.name === nombre_usuario)) {
      callback(true);
    } else {
      callback(false);
    }

    // callback(ERROR);
  }, 3000);
}

cuentaActiva = function(usuario, callback) {
  //... Timeout
}

tieneAcceso = function(usuario, recurso, callback) {
  // timeout
  // condicion
}

// const usuarios = [
usuarios = [
  {
    name: "mackaber",
    activo: true,
    permisos: ["admin", "user"]
  },
  {
    name: "heladio",
    activo: false,
    permisos: ["user"]
  },
  {
    name: "juan",
    activo: true,
    permisos: ["admin"]
  },
  {
    name: "pedro",
    activo: true,
    permisos: ["user"]
  }
]
// const recursos = [
recursos = [
  {
    nombre: "Reportes.pdf",
    acceso : ["admin", "user"]
  },
  {
    nombre: "Confidencial.pdf",
    acceso : ["admin"]
  }
]





// Proceso
// 1. Verificar si el usuario existe
usuarioExiste("heladio", (existe) => {
  if (existe == true) {
    console.log("El usuario existe");
    // 2. Verificar si la cuenta es activa
    
  } else {
    console.log("El usuario no existe");
  }
});


// repl.start("ejercicio> ");
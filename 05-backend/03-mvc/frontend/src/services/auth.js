const BASE_URL = "http://localhost:3000/api/v1";

const loginUser = async (loginData) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData),
  });
  // Algo salió mal y hay que manejarlo
  if (response.ok === false) {
    console.log(response);
    console.log(response.status);
    const { message : errorMessage } = await response.json();
    console.log({errorMessage});
    throw new Error("Inicio de sesión incorrecto.");   // avisar que hubo algo mal
  }
  const { message, token } = await response.json();
  // Guardar el token en localStorage
  // console.log(message);
  localStorage.setItem('token', token);

  // console.log(data);
  return message;
}
// TODO 
const logoutUser = async () => {
  
}

const registerUser = async (newUserData) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserData),
  });
  // Algo salió mal y hay que manejarlo
  if (response.ok === false) {
    // console.log(response);
    // console.log(response.status);
    throw new Error("Error en el registro de usuario");   // avisar que hubo algo mal
  }

  const { data } = await response.json();
  // console.log(data);
  return data;
}

export { loginUser, registerUser, logoutUser };

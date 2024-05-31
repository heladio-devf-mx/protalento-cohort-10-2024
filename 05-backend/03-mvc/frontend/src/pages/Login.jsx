import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // evita que se refresque la página y se envíe el formulario

    const data = {
      email: email,
      password
    };
    
    try {
      setError('');
      const response = await loginUser(data);
      // Limpiar el formulario y redirigir a alguna otra página
      console.log(response);
      setEmail('');
      setPassword('');
      navigate('/autores');
    } catch (error) {
      // Mostrar el error
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <>
      <section>
        <h1 className='section-title'>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* Errores */}
          <div>{error}</div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
        
      </section>
    </>
  );
};
export default Login;

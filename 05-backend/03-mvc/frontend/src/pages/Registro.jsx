import { useState } from 'react';
import  { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // evita que se refresque la página y se envíe el formulario

    const data = {
      email: email,
      password,
      role
    };
    
    try {
      setError('');
      const response = await registerUser(data);
      // Limpiar el formulario y redirigir a alguna otra página
      setEmail('');
      setPassword('');
      setRole('user');
      setSuccessMessage('Usuario registrado exitosamente.');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
      console.log(response);
    } catch (error) {
      // Mostrar el error
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <>
      <section className='main-section'>
        <h1 className='section-title'>Registro de nuevo usuario</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
          <select
            className='form-select'
            name="roleSelect"
            id="roleSelect"
            defaultValue={role}
            onChange={(event) => setRole(event.target.value)}
          >
            <option value="user">Usuario normal</option>
            <option value="admin">Administrador</option>
          </select>
          <label htmlFor="roleSelect">Selecciona Rol</label>
          </div>
          {/* Errores */}
          <div>{error}</div>
          {/* Succes Message */}
          <div>{successMessage}</div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
        
      </section>
    </>
  );
};

export default Registro;

import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <section>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/autores">Autores</NavLink>
          </li>
          <li>
            <NavLink to="/autores/crear">Crear Autor</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <NavLink to="/registro">Registro de usuario</NavLink>
          </li>
          <li>
            <NavLink to="/login">Iniciar Sesión</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default NavBar
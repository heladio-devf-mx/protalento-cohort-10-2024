import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../App';


const NavBar = () => {
  // 3. Consumiendo el contexto
  const MyAuthContext = useContext(AuthContext);
  console.log(MyAuthContext);
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
          <li>
            <NavLink to="/libros/crear">Crear Libro</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <NavLink to="/registro">Registro de usuario</NavLink>
          </li>
          <li>
            <NavLink to="/login">{MyAuthContext.isLogedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}</NavLink>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default NavBar
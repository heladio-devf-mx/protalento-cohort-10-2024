import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
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
    </nav>
  )
}

export default NavBar
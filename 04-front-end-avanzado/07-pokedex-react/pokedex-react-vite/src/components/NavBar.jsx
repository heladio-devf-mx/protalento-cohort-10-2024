import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Pokedex
        </a>
      </div>
      <NavLink to='/'>
        Todos los pokemones
      </NavLink> <br />
      <NavLink to='/about'>
        Acerca de
      </NavLink>
    </nav>
  );
}

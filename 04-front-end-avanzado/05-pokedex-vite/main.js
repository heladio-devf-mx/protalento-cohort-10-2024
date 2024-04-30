import './style.css';
import { cargar_todos_los_pokemones, habilitar_busqueda_pokemon } from './src/funciones_principales';
import SearchBar from './src/components/search_bar';


document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#app").innerHTML = `
    ${SearchBar()}
    <div id="pokemon_container"></div>
  `;
  const pokemon_container = document.querySelector("#pokemon_container");
  cargar_todos_los_pokemones(pokemon_container);
  habilitar_busqueda_pokemon(pokemon_container);
});
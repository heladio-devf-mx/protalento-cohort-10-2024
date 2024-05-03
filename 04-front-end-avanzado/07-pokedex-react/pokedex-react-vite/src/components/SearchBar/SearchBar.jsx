import { useState } from "react";
import { findPokemonByName } from "../../services/pokedexServices";

export default function SearchBar({ actualizarSearchResult }) {
  // Hook(función) para administrar el estado/state de mi componente
  // me devuelve
  // 1. una variable
  // 2. un método para poderla actualizar
  const [pokemon, setPokemon] = useState("");

  // Crear el manejador del evento click para la búsqueda
  async function handleSearch() {
    console.log("Buscando pokemon: " + pokemon);
    // console.log(event);
    // Pedir al Servicio (API) que busque al pokemon
    const searchResult = await findPokemonByName(pokemon);
    // limpiar el formulario
    setPokemon("");
    // Mostrar el resultado
    console.log(searchResult);
    // devolver al pokedex
    actualizarSearchResult(searchResult);
  }

  function handleInputChange(e) {
    // el input del evento es: e.target
    console.log(e.target.value);
    // const nombrePokemon = e.target.value;
    setPokemon(e.target.value);
  }
  // JSX JavaScript + XML (HTML)
  return (
    <header>
      <label htmlFor="pokemon_name_input">Buscar Pokemon</label>
      <input
        id="pokemon_name_input"
        onChange={handleInputChange}
        value={pokemon}
        placeholder="Ej. pikachu"
      />
      <button id="buscar_btn" onClick={handleSearch}>
        Buscar
      </button>
    </header>
  );
}

// Componente principal del Pokedex
import SearchBar from "../SearchBar/SearchBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState, useEffect } from "react";
import { findPokemonByName, first150Pokemons } from "../../services/pokedexServices";

function Pokedex() {
  // Mostrar Resultado
  const [searchResult, setSearchResult] = useState(null); 
  const [pokemones, setPokemones] = useState([]);

  async function obtenerPokemones() {
   let pokemones_result = await first150Pokemons()
    setPokemones(pokemones_result);
  }

  useEffect(() => {
    obtenerPokemones()
  }, [])


  return (
    <>
      <h1>Pokedex (React)</h1>
      <section>
        <SearchBar actualizarSearchResult={setSearchResult} />
        {/* Uso de props */}
        { searchResult && <PokemonCard pokemon={searchResult} /> || 
          pokemones.map((pokemon,i) => 
            <PokemonCard pokemon={pokemon} key={i} />
          )
        }
      </section>
    </>
  );
}

export default Pokedex;

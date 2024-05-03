// Componente principal del Pokedex
import SearchBar from "../SearchBar/SearchBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState } from "react";

function Pokedex() {
  // Mostrar Resultado
  const [searchResult, setSearchResult] = useState({});

  return (
    <>
      <h1>Pokexex (React)</h1>
      <section>
        <SearchBar actualizarSearchResult={setSearchResult} />
        {/* Uso de props */}
        <PokemonCard pokemon={searchResult} />
      </section>
    </>
  );
}

export default Pokedex;

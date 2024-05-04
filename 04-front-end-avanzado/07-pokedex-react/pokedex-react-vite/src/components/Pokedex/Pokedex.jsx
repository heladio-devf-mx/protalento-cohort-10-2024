// Componente principal del Pokedex
import SearchBar from "../SearchBar/SearchBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState } from "react";

function Pokedex() {

const pokemones_mock = [
    {
      name: "bulbasaur",
      weight: 69,
      height: 7,
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
        },
      ],
      sprites: {
        other: {
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          },
        },
      }
    },
    {
      name: "charmander",
      weight: 85,
      height: 6,
      abilities: [
        {
          ability: {
            name: "blaze",
            url: "https://pokeapi.co/api/v2/ability/66/",
          },
        },
      ],
      sprites: {
        other: {
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          },
        },
      },
    }
  ]

  // Mostrar Resultado
  const [searchResult, setSearchResult] = useState({});

  return (
    <>
      <h1>Pokedex (React)</h1>
      <section>
        <SearchBar actualizarSearchResult={setSearchResult} />
        {/* Uso de props */}
        {
          pokemones_mock.map((pokemon,i) => 
          <PokemonCard pokemon={pokemon} key={i} />
          )
        }
      </section>
    </>
  );
}

export default Pokedex;

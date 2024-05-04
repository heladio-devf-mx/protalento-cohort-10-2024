// Componente principal del Pokedex
import SearchBar from "../SearchBar/SearchBar";
import PokemonCard from "../PokemonCard/PokemonCard";
import { useState, useEffect } from "react";
import { first150Pokemons } from "../../services/pokedexServices";

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
        {
          pokemones.map((pokemon,i) => 
          <PokemonCard pokemon={pokemon} key={i} />
          )
        }
      </section>
    </>
  );
}

export default Pokedex;

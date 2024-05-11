import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { useParams } from 'react-router-dom';
import { findPokemonByName } from '../services/pokedexServices';

export default function Pokemon () {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    obtenerPokemon();
  },[])

  async function obtenerPokemon() {
    let pokemon_result = await findPokemonByName(id);
    setPokemon(pokemon_result);
  }

  return (
    (pokemon && <PokemonCard pokemon={pokemon} />)
  )
}
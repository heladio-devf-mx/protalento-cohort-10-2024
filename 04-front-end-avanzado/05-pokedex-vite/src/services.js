async function findPokemonByName(pokemon_name) {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  );
  let pokemon = await response.json();

  return pokemon;
}


export { findPokemonByName }
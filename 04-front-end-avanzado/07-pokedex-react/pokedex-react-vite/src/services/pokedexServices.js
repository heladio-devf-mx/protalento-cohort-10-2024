async function findPokemonByName(pokemon_name) {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  );
  let pokemon = await response.json();

  return pokemon;
}

async function first150Pokemons() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
  let pokemon_list = await response.json();
  let pokemons = [];

  for (let i = 0; i < pokemon_list.results.length; i++) {
    let pokemon = await fetch(pokemon_list.results[i].url);
    pokemons[i] = await pokemon.json();
  }
  return pokemons;
}

export { findPokemonByName, first150Pokemons };

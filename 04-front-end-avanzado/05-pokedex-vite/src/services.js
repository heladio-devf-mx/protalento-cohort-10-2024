async function findPokemonByName(pokemon_name) {
  let response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  );
  let pokemon = await response.json();

  return pokemon;
}

async function first150Pokemons() {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  let pokemon_list = await response.json();
  let pokemons = [];

  for (let i = 0; i < pokemon_list.results.length; i++) {
    let pokemon = await fetch(pokemon_list.results[i].url);
    pokemons[i] = await pokemon.json();
  }
  return pokemons;
}

function getFirst50Pokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(response => {
      // si salió bien con response.ok
      return response.json(); // con esta llamada se devuelve otra promesa
    })
    .then(async (pokemons) => {
      // console.log(pokemons);
      let pokemonList = [];
      for (let i = 0; i < pokemons.results.length; i++) {
        let pokemon = await fetch(pokemons.results[i].url);
        let pokemonDetalle = await pokemon.json();
        // let nuevoPokemon = new Pokemon(pokemonDetalle.name, pokemonDetalle.sprites.other["official-artwor"].front_deafult)
          console.log(pokemonDetalle);
        pokemonList[i] = pokemonDetalle;
      }
    })
    .catch(error => console.log("Error: " + error));
}



export { findPokemonByName, first150Pokemons };

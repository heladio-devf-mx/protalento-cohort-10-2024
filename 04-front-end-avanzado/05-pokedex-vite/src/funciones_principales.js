import { findPokemonByName, first150Pokemons } from "./services";
import Card from "./components/pokemon_card";

function habilitar_busqueda_pokemon(pokemon_container) {
  document.querySelector("#buscar_btn").addEventListener("click", async () => {
    const pokemon_name = document.querySelector("#pokemon_name_input");
    console.log(`Buscando Pokemon ${pokemon_name.value}`);
    let pokemon = await findPokemonByName(pokemon_name.value);
    pokemon_name.value = ""; // Limpiar la caja de texto
    pokemon_container.innerHTML = `
      ${Card(pokemon)}
    `;
  });
}

async function cargar_todos_los_pokemones(pokemon_container) {
  let pokemons = await first150Pokemons();
  let html = "";
  for (let i = 0; i < pokemons.length; i++) {
    html = html + Card(pokemons[i]);
  }
  pokemon_container.innerHTML = html;
}

export { cargar_todos_los_pokemones, habilitar_busqueda_pokemon };
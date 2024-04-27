import './style.css';
import { findPokemonByName } from "./src/services";
import Card from './src/components/pokemon_card';

document.querySelector("#app").innerHTML = `
  <input id="pokemon_name_input" />
  <button id="buscar_btn">Buscar</button>
  <div id="pokemon_container"></div>
`;

document.querySelector("#buscar_btn").addEventListener("click", async () => {
  const pokemon_name = document.querySelector("#pokemon_name_input");
  const pokemon_container = document.querySelector("#pokemon_container");

  let pokemon = await findPokemonByName(pokemon_name.value);
  pokemon_name.value = ""; // Limpiar la caja de texto

  pokemon_container.innerHTML = `
    ${Card(pokemon)}
  `;
});
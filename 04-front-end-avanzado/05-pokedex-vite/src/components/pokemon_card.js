export default function Card (pokemon) {
  return `
  <div class="card">
    <h1>${pokemon.name}</h1>
    <img style="width:200px" src="${pokemon.sprites.other["official-artwork"].front_default}" /><br>
    <label>Altura:</label>
    <span>${pokemon.height}</span><br>
    <label>Peso:</label>
    <span>${pokemon.weight}</span><br>
    <label>Habilidad principal:</label>
    <span>${pokemon.abilities[0].ability.name}</span>
  </div>
  `;
}

// import { Card } from './components/pokemon_card' => export { Card }
// import Card from './components/pokemon_card' => export default Card
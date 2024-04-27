export default function Card (pokemon) {
  return `
  <h1>${pokemon.name}</h1>
  <p>
    <img style="width:200px" src="${pokemon.sprites.other["official-artwork"].front_default}" /><br>
    <label>Altura:</label>
    <span>${pokemon.height}</span><br>
    <label>Peso:</label>
    <span>${pokemon.weight}</span>
  </p>  
  `
}

// import { Card } from './components/pokemon_card' => export { Card }
// import Card from './components/pokemon_card' => export default Card
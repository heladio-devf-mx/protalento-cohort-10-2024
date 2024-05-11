
export default function PokemonCard(props) {
  // Props sirven para inicializar o pasar información al componente
  // props = {
  //  pokemon: pokemonFake
  // }
  console.log(props);
  return (
    <div className="card">

      <h1>{props.pokemon.name}</h1>
      <img style={{width: 200}}  src={props.pokemon.sprites.other["official-artwork"].front_default} />
      <br />
     <label>Altura:</label>
      <span>{props.pokemon.height}</span><br></br>
      <label>Peso:</label>
      <span>{props.pokemon.weight}</span><br/>
      <label>Habilidad principal: </label>
      <span>{props.pokemon.abilities[0].ability.name}</span>
    </div>
  );
}

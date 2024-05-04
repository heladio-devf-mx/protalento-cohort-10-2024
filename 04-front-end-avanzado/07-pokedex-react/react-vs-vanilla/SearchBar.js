function desplegarPokemones() {

  console.log("Buscando pokemon");

  // Llamar al Servicio
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(respuesta => respuesta.json())
    .then(datos => {
      console.log(datos);
    })
    .catch(error => console.log(error));

    const pokemon_name_input = document.getElementById("pokemon_name_input").value = "";
    const pokemon_list = document.getElementById("pokemon_list");
    
  
}


function SearchBar () {


  return `
    <header>
      <input id="pokemon_name_input" />
      <button id="search_btn" onclick="desplegarPokemones()">Buscar</button>
    </header>
  `
}
import { useState } from "react";

function AgregarFruta() {
    const [nuevaFruta, setNuevaFruta] = useState ("")
    function handleInputChange(e) {
        // el input del evento es: e.target
        console.log(e.target.value);
        // const nombrePokemon = e.target.value;
        setNuevaFruta(e.target.value); // sirve para guardar lo que escribamos en el input de la fruta
      }
  return (
    <>
      <label htmlFor="pokemon_name_input">Nueva fruta</label>
      <input
        id="pokemon_name_input"
        onChange={handleInputChange}
        value={nuevaFruta}
        placeholder="Ej. mango"
      />
      
    </>
  );
}
export default AgregarFruta;

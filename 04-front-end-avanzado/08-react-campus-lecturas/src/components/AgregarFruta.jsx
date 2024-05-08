import { useState } from "react";
import ListaFrutasSimple from './ListaFrutasSimple';

function AgregarFruta() {
  const [frutas, setFrutas] = useState([]); // lista vacía de frutas
  const [nuevaFruta, setNuevaFruta] = useState ("")
  
  function handleInputChange(e) {
    // el input del evento es: e.target
    // console.log(e.target.value);
    // const nombrePokemon = e.target.value;
    setNuevaFruta(e.target.value); // sirve para guardar lo que escribamos en el input de la fruta
  }

  function handleAgregarFruta() {
    // Uniendo las frutas existentes con la nueva fruta
    const frutasActualizadas = [...frutas, nuevaFruta];
    setFrutas(frutasActualizadas);
    setNuevaFruta("");
  }

  // console.log(frutas);

  return (
    <>
      <h2>Nueva canasta de frutas:</h2>
      <label htmlFor="nombre-fruta-input">Nueva fruta</label>
      <input
        id="nombre-fruta-input"
        onChange={handleInputChange}
        value={nuevaFruta}
        placeholder="Ej. mango"
      />
      <button id="button-agregar-fruta" onClick={handleAgregarFruta}>
        Agregar a la canasta
      </button>
      <section>
        <ListaFrutasSimple listaFrutas={frutas} />
      </section>
    </>
  );
}
export default AgregarFruta;

import Fruta from './Fruta';

function ListaFrutasSimple({ listaFrutas }) {
  // Render condicional
  if (listaFrutas.length < 1) {
    return (<>No hay frutas...</>); // ahí termina la función/componente
  }

  return (
    <>
      <h2>Lista de Frutas</h2>
      <ul>
        {
          listaFrutas.map((fruta, index) => {
            return <Fruta key={index} nombre={fruta} color="chocolate" />
          })
        }
      </ul>
    </>
  );
}

export default ListaFrutasSimple;
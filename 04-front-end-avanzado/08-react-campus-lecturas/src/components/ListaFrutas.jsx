import Fruta from './Fruta';

function Frutas({ listaFrutas }) {
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
            // return <li key={index}>{fruta.nombre}</li>
            // return <Fruta key={index} {...fruta} />
            return <Fruta key={index} nombre={fruta.nombre} color={fruta.color} />
          })
        }
      </ul>
    </>
  );
}

export default Frutas;
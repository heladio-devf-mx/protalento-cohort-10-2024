import MiPerfil from './components/MiPerfil';
import ListaFrutas from './components/ListaFrutas';
import './App.css';
import AgregarFruta from './components/AgregarFruta';

function App() {
  const frutas = [  // []
    { nombre: 'Piña', color: 'yellow' },
    { nombre: 'Manzana', color: 'red' }, 
    { nombre: 'Uva', color: 'green' },
  ];

  return (
    <>
      <header>        
        <h1>
          Ejercicios de las lecturas del campus
        </h1>
      </header>
      <MiPerfil />
      <ListaFrutas listaFrutas={frutas} />
      {/* Frutas */}
      <AgregarFruta />
    </>
  )
}

export default App;

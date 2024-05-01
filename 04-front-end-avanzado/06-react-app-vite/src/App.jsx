import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// Iporto mis componentes
import MiBoton from './components/MyButton';

function App() {
  // Manejo del Estado / State
  const [count, setCount] = useState(0);  // hook de State

  return (
    <>
    {/* React Fragment <> </> 
    Siempre devuelve un elemento que envuelve a los demás
     */}
      <section>
        <MiBoton />
        <MiBoton />
        <MiBoton />
        
        {/* <MiBoton></MiBoton> */}
      </section>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + ReactJS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

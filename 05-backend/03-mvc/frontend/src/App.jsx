import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesIndex from './routes/RoutesIndex';
import NavBar from './components/NavBar';

// 1. Crear objeto del context con un valor por defecto
export const AuthContext = createContext(); // { isLogedIn: false }

function App() {

  return (
    <>
      <BrowserRouter>
      {/* 2. Provider: proveer información al contexto */}
        <AuthContext.Provider value={{isLogedIn: false}}>
          {/* Hijos / Children */}
          <NavBar />
          <RoutesIndex />
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesIndex from './routes/RoutesIndex';
import NavBar from './components/NavBar';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {

  return (
    <>
      <BrowserRouter>
      {/* 2.3 Uso el componente que tiene al Provider del contexto */}
        <AuthContextProvider>
          {/* Hijos / Children */}
          <NavBar />
          <RoutesIndex />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

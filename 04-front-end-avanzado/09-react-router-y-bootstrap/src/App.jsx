import './App.css';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
// Router
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
import ProductRoutes from './routes/RoutesProduct';

function App() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <BrowserRouter>
          <NavBar />
          <ToDoList />
          {/* Mapeo de las rutas y páginas */}
          <RoutesIndex />
          <ProductRoutes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

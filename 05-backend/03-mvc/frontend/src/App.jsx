import { BrowserRouter } from 'react-router-dom';
import './App.css'
import RoutesIndex from './routes/RoutesIndex'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
} 

export default App

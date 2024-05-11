import { Routes, Route } from 'react-router-dom';
import Pokemon from '../src/pages/Pokemon';
import Pokedex from '../src/components/Pokedex/Pokedex';
import About from '../src/pages/About';

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' element={<Pokedex />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id' element={<Pokemon />} />
    </Routes>
  )
}
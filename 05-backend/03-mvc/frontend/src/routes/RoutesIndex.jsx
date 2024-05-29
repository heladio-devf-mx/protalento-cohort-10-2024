import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Autores from "../pages/Autores";
import CrearAutor from "../pages/CrearAutor";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/autores" element={<Autores />} />
      <Route path="/autores/crear" element={<CrearAutor />} />
    </Routes>
  );
}
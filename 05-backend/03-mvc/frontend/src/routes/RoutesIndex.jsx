import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Autores from "../pages/Autores";
import Paises from "../pages/Paises";
import CrearAutor from "../pages/CrearAutor";
import CrearLibro from "../pages/CrearLibro";
import Registro from "../pages/Registro";
import Login from "../pages/Login";

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Rutas de Auth (authentication / authorization) */}
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/autores" element={<Autores />} />
      <Route path="/paises" element={<Paises />} />
      <Route path="/autores/crear" element={<CrearAutor />} />
      <Route path="/libros/crear" element={<CrearLibro />} />
    </Routes>
  );
}
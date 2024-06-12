import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
// import Registro from "../pages/Registro";
// import Login from "../pages/Login";

// Otra manera de exportar el componente de React
export default function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Rutas de Auth (authentication / authorization) */}
      {/* <Route path="/registro" element={<Registro />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

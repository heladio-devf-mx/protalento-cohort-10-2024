import { createContext, useEffect, useState } from "react";
import { getMoviesList } from "../services/moviesService";
// 1. Crear objeto del context sin un valor por defecto (vacío)
const MoviesContext = createContext();

// 2. Agregar un Provider: es quien va a proveer de información y/o funciones al contexto
// 2.1 Lo haremos a través de un componente de React
const MoviesContextProvider = ({ children }) => {
  // 2.2 Definir qué es lo que quiero compartir en mi estado global/context
  const [moviesList, setMoviesList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  // 2.4 Configurar la comunicación con el API si hace falta
  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMoviesList();
      setMoviesList(moviesData);
    }
    // getMoviesList: inicializar la lista de películas
    fetchMovies();
  }, []); // Sólo se ejecuta cuando se carga este componenete.

  // 2.3 Cada que entremos a este contexto, queremos que recupere la lista de películas
  const contextData = {
    moviesList,
    setMoviesList,
    selectedMovie,
    setSelectedMovie
  };

  return (
    <MoviesContext.Provider value={contextData}>
      {children}
    </MoviesContext.Provider>
  );
}

// Exportamos el context y el componente con el proveedor de información
export {
  MoviesContextProvider,
  MoviesContext
};

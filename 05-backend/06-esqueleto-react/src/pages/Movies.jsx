import MovieDetail from "../components/MovieDetail";
import MoviesList from "../components/MoviesList";
import { MoviesContextProvider } from "../contexts/MoviesContext";

const Movies = () => {
  return (
    // Este es el paso 3. del uso de contexto, lo configuramos
    <MoviesContextProvider>
      {/* Children components-> Usamos el contexto en los hijos */}
      <div>
        <header style={{height: "70px"}}>
          <h2>Bienvenido a tu colección de Películas</h2>
        </header>
        <div className="movies-container">
          <MoviesList />
          <MovieDetail />
        </div>
      </div>
    </MoviesContextProvider>
  );
};

export default Movies;
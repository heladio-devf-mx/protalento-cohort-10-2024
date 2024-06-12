const API_URL = `http://localhost:3003/api/v1/movies`;

const getMoviesList = async() => {
  try {
    const result = await fetch(API_URL);
    const moviesData = await result.json();
    // Todo salió bien...
    return moviesData.data;
  } catch (error) {
    console.log(`Error al recuperar las películas: ${error.message}`);
  }
};

export {
  getMoviesList
};

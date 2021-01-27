import React, { useEffect, useState } from 'react';
import Movie from './component/Movie'

const feature_api = "https://api.themoviedb.org/3/movie/popular?api_key=5e14a5761f3f0b7849d62555deb85d02&language=en-US&page=1"

const search_api = "https://api.themoviedb.org/3/search/movie?api_key=5e14a5761f3f0b7849d62555deb85d02&language=en-US&page=1&include_adult=false"

function App() {

  const[ movies, setMovies ] = useState([]);
  
  useEffect(() =>{
    fetch(feature_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results)
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
      )}
      
    </div>
  )
}
export default App;

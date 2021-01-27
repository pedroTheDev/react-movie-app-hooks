import React, { useEffect, useState } from 'react';
import Movie from './component/Movie'

const feature_api = "https://api.themoviedb.org/3/movie/popular?api_key=5e14a5761f3f0b7849d62555deb85d02&language=en-US&page=1"

const search_api = "https://api.themoviedb.org/3/search/movie?api_key=5e14a5761f3f0b7849d62555deb85d02&query="

function App() {

  const[ movies, setMovies ] = useState([]);
  const[ searchTerm, setSearchTerm ] = useState('');
  
  useEffect(() =>{
    fetch(feature_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results)
      });
  }, []);

  function handleSubmit(e){
    e.preventDefault()
    
    if(searchTerm){
    fetch(search_api+searchTerm)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results)
    });
    setSearchTerm('');
  }

  }
  function handleChange(e){
    setSearchTerm(e.target.value);

  }

  return (
    <>
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
        className="search"
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        />
        <button className="chill-btn" type="submit"> ChillFlix </button>
        </form>
      </header>
    <div className="movie-container">
      
      {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} {...movie} />
      )}
      
    </div>
    </>
  )
 
};
export default App;

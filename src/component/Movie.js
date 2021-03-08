import React from 'react'

const img_api = "https://image.tmdb.org/t/p/w500"

const setVoteClass = (vote) => {
  if(vote >= 8 ){
    return "green";
  } else if(vote <= 6){
    return "red"
  } else{
    return "orange"
  }
}

const Movie = ({title, poster_path, overview, vote_average, release_date}) => {
  return (
    <div className="movie">
    <img src={img_api + poster_path} alt={title}  />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <h4 className="movie-date">Release date: {release_date}</h4>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      <div className="movie-over">
        <h2>Overview:
          <p>{overview}</p>
        </h2>
      </div>
  </div>
  )
}

export default Movie;

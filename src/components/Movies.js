import React from "react";
import { movies } from "../data";

function Movies() {
  console.log("movies data: ", movies)
  const moviesList =  movies.map((movie) => {
    
      return (     
          <div key={movie.title}>
            <h1>{movie.title}</h1>
            <p>{movie.time} minutes</p>
            <ul>
              {movie.genres.map((genre) => {
                return <li key = {genre}>{genre}</li>
              })}
            </ul>
          </div>
      )
    });

  console.log("movies List:", moviesList)
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  )
 
  
}

export default Movies;

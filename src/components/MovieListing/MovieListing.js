import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import {MovieCard} from '../index'
import "./MovieListing.scss"
const MovieListing = () => {
  //Getting Movies from the movieSlice
  const movies= useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  

  //Rendering movies
  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index)=>(
      <MovieCard key={index} data={movie} />
    ))
  ) : (<div className="movies.error"><h3>{movies.Error}</h3></div>)


  //Rendering shows
  let renderShows = "";
  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index)=>(
      <MovieCard key={index} data={show} />
    ))
  ) : (<div className="shows.error"><h3>{shows.Error}</h3></div>)


  return (
    <div className="movie-wrapper">
      <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            {renderMovies}
          </div>
      </div>

      <div className='movie-list'>
          <h2>Shows</h2>
          <div className='movie-container'>
            {renderShows}
          </div>
      </div>
    </div>
  )

 
  
}

export default MovieListing
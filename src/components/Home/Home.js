import * as React from 'react'
import {MovieListing} from "../index"
import "./Home.scss"
import {useDispatch,useSelector} from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
const Home = () => {


   // Dispath Object
   const dispatch = useDispatch();

  // Fetching Data on Mounting
  React.useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  },[dispatch])

 
  
  return (
    <>
    <div className='banner-img'>
      <MovieListing />
    </div>
    </>
    
  )
}

export default Home
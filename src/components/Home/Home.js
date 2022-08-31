import * as React from 'react'
import {MovieListing} from "../index"
import movieApi from "../../common/services/apis/movieApi"
import "./Home.scss"
import {APIKEY} from "../../common/services/apis/MovieApiKey"
import {useDispatch,useSelector} from "react-redux"
import { addMovies } from '../../features/movies/movieSlice'
const Home = () => {


   // Dispath Object
   const dispatch = useDispatch();

  // Fetching Data on Mounting
  React.useEffect(()=>{
    const movieText= "Harry"
    const fetchMovies = async() =>{
      const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("error",err);
      })
      console.log("Response",response)
      dispatch(addMovies(response.data))
    };
    fetchMovies() 
  },[])

 
  
  return (
    <>
    <div className='banner-img'>
      <MovieListing />
    </div>
    </>
    
  )
}

export default Home
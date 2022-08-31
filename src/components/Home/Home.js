import * as React from 'react'
import {MovieListing} from "../index"
import movieApi from "../../common/services/apis/movieApi"
import "./Home.scss"
import {APIKEY} from "../../common/services/apis/MovieApiKey"
const Home = () => {

  React.useEffect(()=>{
    const movieText= "Harry"
    const fetchMovies = async() =>{
      const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log("error",err);
      })

      console.log("Response",response)
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
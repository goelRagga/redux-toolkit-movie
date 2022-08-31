import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieApi from '../../common/services/apis/movieApi';
import { APIKEY } from '../../common/services/apis/MovieApiKey';

const initialState = {
    loading:true,
    movies:{},
    shows:{}
}

//Fetching Movies
export const fetchAsyncMovies =createAsyncThunk(`movies/fetchAsyncMovies`,async () =>{
    const movieText= "Harry";
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
    console.log("Fetching Movies Asynchronously")
    return response.data;
})


//Fetching Shows
export const fetchAsyncShows =createAsyncThunk(`movies/fetchAsyncShows`,async () =>{
    const seriesText= "friends";
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${seriesText}&type=series`)
    console.log("Fetching Shows Asynchronously ")
    return response.data;
})





const movieSlice = createSlice({
    name:"movies", 
    initialState,
    reducers:{
     
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            state.loading=true;
            console.log("Pending State")
        });
        builder.addCase(fetchAsyncMovies.fulfilled, (state,{payload}) =>{
            console.log("Fullfilled");
            state.loading=false;
            state.movies=payload;
        });
        builder.addCase(fetchAsyncMovies.rejected, (state, action)=>{
            state.loading = false;
            state.movies= [];
            console.log(" In rejected State");
        });
        builder.addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
            state.loading = false;
            state.shows=payload;
            console.log("Shows Fullfilled");
        })
}
});
console.log("Movie Slice",movieSlice);
export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) =>state.movies.movies;
export const getAllShows = (state) =>state.movies.shows;
export default movieSlice.reducer;
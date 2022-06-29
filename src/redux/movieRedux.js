import { createSlice } from '@reduxjs/toolkit';



const movieSlice = createSlice({
    name:"movie",
    initialState:{
        movies: [],
        isFetching:false,
        error:false
    },

    reducers: {
        
        //GET ALL MOVIES
        getMovieStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        getMovieSuccess:(state,action) =>{
            state.isFetching = false;
            state.movie= action.payload
        },
        getMovieFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },

        //DELETE MOVIE
        deleteMovieStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        deleteMovieSuccess:(state,action) =>{
            state.isFetching = false;
            state.movie.splice(
                state.movie.findIndex((item) => item._id === action.payload ),
                1
            )
        },
        deleteMovieFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },

        //ADD MOVIE
        addProductStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        addMovieSuccess:(state,action) =>{
            state.isFetching = false;
            state.movies.push(action.payload);
        },
        addMovieFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },

        //UPDATE MOVIE
        updateMmovieStart:(state) =>{
            state.isFetching = true
            state.error = false
        },
        updateMovieSuccess:(state,action) =>{
            state.isFetching = false;
            state.movies[
                state.movies.findIndex((item) => item._id === action.payload.id )
            ] = action.payload.product;
        },
        updateMovieFailure:(state) =>{
            state.isFetching = false;
            state.error = true;
        },
    },
});


export const { 
      getMovieStart, 
      getMovieSuccess, 
      getMovieFailure ,
      deleteMovieStart , 
      deleteMovieFailure , 
      deleteMovieSuccess ,
      updateMovieStart , 
      updateMovieFailure , 
      updateMovieSuccess,
      addMovieStart , 
      addMovieFailure , 
      addMovieSuccess,

} = movieSlice.actions;

export default movieSlice.reducer; 
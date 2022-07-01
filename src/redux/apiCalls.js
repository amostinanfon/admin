import { publicRequest, userRequest } from '../requestMethods';
import { addMovieFailure, 
         addMovieStart, 
         addMovieSuccess, 
         deleteMovieFailure, 
         deleteMovieStart, 
         deleteMovieSuccess, 
         getMovieFailure, 
         getMovieStart, 
         getMovieSuccess, 
         updateMovieFailure, 
         updateMovieStart, 
         updateMovieSuccess 
    } from './movieRedux';

import { loginStart , 
         loginFailure ,
         loginSuccess, 
         getUserStart, 
         getUserSuccess, 
         getUserFailure, 
         deleteUserStart, 
         deleteUserSuccess, 
         deleteUserFailure 
    } from './userRedux';



export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}



export const getMovies = async (dispatch) =>{
    dispatch(getMovieStart());
    try {
        const res = await userRequest.get("/movies")
        dispatch(getMovieSuccess(res.data))
    } catch (error) {
        dispatch(getMovieFailure())
    }
}

export const deleteMovie = async (id , dispatch) =>{
    dispatch(deleteMovieStart());
    try {
        const res = await userRequest.delete(`/movies/${id}`)
        dispatch(deleteMovieSuccess(id && res.data))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}
export const updateMovie = async (id , movie , dispatch) =>{
    dispatch(updateMovieStart());
    try {
         dispatch(updateMovieSuccess(
            { id , movie }
        ))
    } catch (error) {
        dispatch(updateMovieFailure())
    }
}

export const addMovie = async (movie, dispatch) =>{
    dispatch(addMovieStart());
    try {
        const res = await userRequest.post("/movie", movie)
    dispatch(addMovieSuccess(res.data));
    } catch (error) {
    dispatch(addMovieFailure())
    }
}

export const getUsers = async (dispatch) =>{
    dispatch(getUserStart());
    try {
        const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
    } catch (error) {
    dispatch(getUserFailure());
    }
}
export const deleteUser = async (id,dispatch) =>{
    dispatch(deleteUserStart());
    try {
        //const res = await userRequest.get("/users");
    //dispatch(deleteUserSuccess(id));

        const res = await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id && res.data))
   
    
    } catch (error) {
    dispatch(deleteUserFailure());
    }
}
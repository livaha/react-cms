import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

import {Header} from './Header';
import Search from './Search';
import Movie from './Movie';
import {initialState,reducer} from './store/reducer';
import spinner from './assest/ajax-loader.gif';
import './assest/style.less';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=ice&apikey=f5fd723f'

const HookMovie = () =>{
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        axios.get(MOVIE_API_URL)
        .then(res=>{
            dispatch({
                type:'SEARCH_MOVIES_SUCCESS',
                payload:res.data.Search
            })
        })
    },[])
    
    const search=searchValue=>{
        dispatch({
            type:"SEARCH_MOVIES_REQUEST"
        });
        axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=f5fd723f`)
        .then(res=>{
            if(res.data.Response==='True'){
                dispatch({
                    type:"SEARCH_MOVIES_SUCCESS",
                    payload:res.data.Search
                });
            }else{
                dispatch({
                    type:"SEARCH_MOVIES_FAILURE",
                    error:res.data.Error
                });
            }
        });
    }

    const {movies,errorMessage,loading} = state;

    const renderMovies = 
        loading && !errorMessage?(
            <img src={spinner} alt='Loadding spinner'/>
        ):errorMessage?(
        <div>{errorMessage}</div>
        ):(
            movies.map((movie,index)=>(
                <Movie key='index' movie={movie}/>
            ))
        )
    return(
        <div className="hook-movie">
            <Header title="Movie"/>
            <Search search={search}/>
            <p>Search Moives you like!</p>
            <div className="movies">{renderMovies}</div>
        </div>
    )
}
export default HookMovie;

/**本项目cgi来自网站http://www.omdbapi.com/ */
import React from 'react'
import { useLocation } from 'react-router-dom';
import './Movie.css'
const base_url="https://image.tmdb.org/t/p/original/"
export default function Movie(props){
    const location=useLocation();
    const movie=location.state;
    console.log(movie)
    return(
        <div className='movie'
        style={{color:"white" ,backgroundImage:
        `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}}>
            <div className='movie-contents'>
                <h1 className='title'>{movie?.title||movie?.name||movie?.original_name}</h1>
                <h1 className='description'>{movie.overview}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                </div>
            </div>
            
        </div>
        
    )
}
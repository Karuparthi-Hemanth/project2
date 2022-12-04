import requests from './requests'
import NavBar from './NavBar.js'
import Row from './Row.js'
import Grid from './Grid.js'
import Mylist from './Mylist.js'
import axios from './axios'
import { useEffect,useState,useContext } from 'react'
import {store} from './App'
import {Link} from 'react-router-dom'
export default function Home(){
    const base_url="https://image.tmdb.org/t/p/original/";
    // const [token,setToken] = useContext(store)
    // const [data,setData] = useState(null);
    const [movies,setMovies]=useState(null);
    useEffect(() =>{
      const getUsersLikedMovies=async () => {
        const {
          data: { movies },
        } = await axios.get(`http://localhost:5000/api/user/liked:saigovind@gmail.com`);
        console.log(movies);
      }
      getUsersLikedMovies();
    },[])

    return(
        <div>
            <NavBar/>
        <Grid/>
        {/* <Mylist user={data}/>   */}
        {/* <div className="posters">
                {movies.map(movie=>(
                    //`'/Movie:${movie?.title||movie?.name||movie?.original_name}'`
                    <Link to='/Movie' state={movie}>
                        <img key={movie.id} 
                        className='poster'     
                        src={base_url+movie.poster_path} 
                        alt={movie.name} />
                    </Link>                          
                ))}
            </div> */}
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}></Row>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
          <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
        </div>
        
    )
}
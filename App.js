import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import NavBar from './NavBar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Movie from './Movie';
import Grid from './Grid';
import FilteredMovies from './FilteredMovies';

// import Banner from './Banner';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Routes>
          <Route path='/' element={
            <div>
          <NavBar/>
          <Grid/>  
          <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}></Row>
          <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
          <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
          <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
          <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
          <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
        </div>
          }/>   
            <Route path='/Movie' element={<Movie/>}/>
            <Route path='/Filtered' element={<FilteredMovies/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}


import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import Nav from './Nav';
import FilteredMovies from './FilteredMovies';
import Register from './Register';
import Login from './Login';

import Mylist from './Mylist'
// import Myprofile from './Myprofile';

export const store = createContext();

export default function App(){
  const [token,setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token,setToken]}>
      <Router>
        <Routes>
          <Route path='/' element={<Nav/>}/>   
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route path='/myprofile' component={Myprofile} /> */}
          <Route path='/Movie' element={<Movie/>}/>
          {/* <Route path='/Myprofile' element={<Myprofile/>}/> */}

          <Route path='/Filtered' element={<FilteredMovies/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Mylist' element={<Mylist/>}/>

        </Routes>
      </Router>
      </store.Provider>
    </div>
  );
}
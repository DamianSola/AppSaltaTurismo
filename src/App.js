import './App.css';
import React from 'react';
import {Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Carousel from './Components/Carousels/Carousel';
import Landing from './Components/Landing/Landing';
import Activities from './Components/Activities/Activities';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Resume from './Components/Admin/Resume/Resume';
// const DarkMod = () => {

// }


function App() {
  return (
    <div className="App">
        <Landing/>
      <Routes>
      {/* <Route path='/' element={<Landing/>}/> */}
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/admin' element= {<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;

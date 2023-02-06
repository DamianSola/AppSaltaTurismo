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
import ElementList from './Components/AllElements/ElememntsList';
import About from './Components/About/About';
import SubCategories from './Components/SubCategories/SubCategories';
// const DarkMod = () => {

// }


function App() {
  return (
    <div className="App">
        <Landing/>
      <Routes>
      {/* <Route path="/" element={<Landing/>}/> */}
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/sub-categories/:id' element={<ElementList/>}/>
      <Route exact path='/admin' element= {<Resume/>}/>
      <Route exact path='/about' element= {<About/>}/>
      <Route exact path='/categories/:id' element= {<SubCategories/>}/>
      </Routes>
    </div>
  );
}

export default App;

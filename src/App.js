import './App.css';
import React from 'react';
import {Route, Routes } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import Activities from './Components/Activities/Activities';
import Home from './Components/Home/Home';
import Resume from './Components/Admin/Resume/Resume';
import ElementList from './Components/AllElements/ElememntsList';
import About from './Components/About/About';
import SubCategories from './Components/SubCategories/SubCategories';
import TownDetails from './Components/Towns/TownsDetails';
import OnlyTours from './Components/Tours/OnlyTours';
import TourDetail from './Components/Tours/TourDetail'
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import AllActivities from './Components/Admin/Details/AllActivities';
import AllSubCategories from './Components/Admin/Details/AllSubCategories';
import AllCategories from './Components/Admin/Details/AllCategories';
import AllTowns from './Components/Admin/Details/AllTowns';
import AllServices from './Components/Admin/Details/AllService';


function App() {
  return (
    <div className="App" >
        <Landing/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/sub-categories/:id' element={<ElementList/>}/>
      <Route exact path='/admin' element= {<Resume/>}/>
      <Route exact path='/about' element= {<About/>}/>
      <Route exact path='/categories/:id' element= {<SubCategories/>}/>
      <Route exact path='/town/:id' element= {<TownDetails/>}/>
      <Route exact path='/tours' element= {<OnlyTours/>}/>
      <Route exact path='/tours/:id' element= {<TourDetail/>}/>
      <Route exact path='/service/:id' element= {<Services/>}/>
      <Route exact path='/sub-categories/activity/:id' element={<Activities/>}/>
      <Route exact path= '/admin/ACTIVITIES' element={<AllActivities/>}/>
      <Route exact path='/admin/SUB CATEGORIES' element={<AllSubCategories/>}/>
      <Route exact path='/admin/CATEGORIES' element={<AllCategories/>}/>
      <Route exact path='/admin/TOWNS' element={<AllTowns/>}/>
      <Route exact path='/admin/SERVICE' element={<AllServices/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;



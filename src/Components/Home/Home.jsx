import React, {useEffect} from "react";
import Activities from "../Activities/Activities";
import Carousel from "../Carousels/Carousel";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import { HomeContainer,secondContainer, ImagePresentation } from "./StyleHome";
import {useDispatch, useSelector} from "react-redux"
import { getAllActivities} from "../../Redux/Actions/Index"
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";



export default function Home(){

    // const dispatch = useDispatch()



    return(
        <HomeContainer>
            <Intro/>
            <h1>DESTACADOS</h1>
            <CategoriesHome/>
            <h1>TOURS</h1>
            <Tours/>
            <h1>PUEBLOS DE SALTA</h1>
            <Towns/>
            <Footer/>
        </HomeContainer>
        
    )
}
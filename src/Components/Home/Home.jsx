import React, {useEffect} from "react";
import Activities from "../Activities/Activities";
import Carousel from "../Carousels/Carousel";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import { HomeContainer,secondContainer } from "./StyleHome";
import {useDispatch, useSelector} from "react-redux"
import { getAllActivities} from "../../Redux/Actions/Index"
import Tours from "../Tours/Tours";



export default function Home(){

    // const dispatch = useDispatch()



    return(
        <HomeContainer>
            <Carousel/>
            <Activities/>
            <Services/>
            <Tours/>
            <Footer/>
        </HomeContainer>
        
    )
}
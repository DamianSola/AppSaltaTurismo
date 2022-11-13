import React from "react";
import Activities from "../Activities/Activities";
import Carousel from "../Carousels/Carousel";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import { HomeContainer,secondContainer } from "./StyleHome";



export default function Home(){

    return(
        <HomeContainer>
            <Landing/>
            <Carousel/>
            <Activities/>
            <Services/>
            <Footer/>
        </HomeContainer>
        
    )
}
import React, {useEffect} from "react";
import { HomeContainer} from "./StyleHome";
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";
import styled from "styled-components"
import About from "../About/About";

const Title = styled.h1`
    color:black;
    transition: 0.3s;
    margin: 20px;
` 



export default function Home(){
    
    useEffect(() => {
        document.title = "Home";
    }, [])

    return(
        <HomeContainer>
            <Intro/>
            <Title>DESTACADOS</Title>
            <CategoriesHome/>
            <br/>
            {/* <Title><StyleLink to='/tours' text-decoration="none">TOURS</StyleLink></Title> */}
            <Title id="tours">TOURS</Title>
            <Tours/>
            <br/>
            <Title id="towns">PUEBLOS DE SALTA</Title>
            <Towns/>
            <br/>
            <Title id="about">SOBRE NOSOTROS</Title>
            <About/>
            {/* <Carousel/> */}

        </HomeContainer>
        
    )
}
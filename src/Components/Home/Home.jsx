import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import { HomeContainer, StyleLink } from "./StyleHome";
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";
import styled from "styled-components"

const Title = styled.h1`
    color:black;
    transition: 0.3s;
    :hover{
        color: bisque
        ;
    }
` 



export default function Home(){

    // const dispatch = useDispatch()
    useEffect(() => {
        document.title = "Home";
    }, [])

    return(
        <HomeContainer>
            <Intro/>
            <Title>DESTACADOS</Title>
            <CategoriesHome/>
            <Title><StyleLink to='/tours' text-decoration="none">TOURS</StyleLink></Title>
            <Tours/>
            <Title>PUEBLOS DE SALTA</Title>
            <Towns/>
            <Footer/>
        </HomeContainer>
        
    )
}
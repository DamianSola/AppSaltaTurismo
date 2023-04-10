import React, {useEffect} from "react";
import { HomeContainer} from "./StyleHome";
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";
import styled from "styled-components"
import About from "../About/About";
import { Button } from "reactstrap";
import {Link} from "react-router-dom"

const Title = styled.h1`
    color:black;
    transition: 0.3s;
    margin: 20px;
` 
const Component = styled.div`
    display: block;
    padding: 20px 0;
`
const ShowMore = styled(Button)`
    background-color: black;

    .link{
        text-decoration: none;
        color: #ffff;
    }
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
            <Component  id="tours">
            <Title>TOURS</Title>
            <Tours/>
            <ShowMore><Link className="link" exact to={`/tours`}>VER MAS RECORRIDOS</Link></ShowMore>
            </Component>
            
            <br/>

            <Component id="towns">
            <Title>PUEBLOS DE SALTA</Title>
            <Towns/>
            <ShowMore><Link className="link" exact to={`/tours`}>VER TODOS LOS PUEBLOS</Link></ShowMore>
            </Component>
            
            <br/>
            <Component id="about">
            <Title>SOBRE NOSOTROS</Title>
            <About/>
            </Component>

        </HomeContainer>
        
    )
}
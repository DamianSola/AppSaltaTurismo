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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* font-family: 'Courier New', Courier, monospace; */
    /* font-style: oblique; */
    margin: 20px;
` 
const Component = styled.div`
    display: block;
    padding: 20px 0;
`
const ShowMore = styled(Button)`
    background-color: black;
    margin: 20px;

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
            <Title>destacados</Title>
            <CategoriesHome/>
            <br/>
            <Component  id="tours">
            <Title>tours</Title>
            <Tours/>
            <ShowMore><Link className="link" exact to={`/tours`}>VER MAS RECORRIDOS</Link></ShowMore>
            </Component>
            
            <br/>

            <Component id="towns">
            <Title>pueblos de Salta</Title>
            <Towns/>
            <ShowMore><Link className="link" exact to={`/tours`}>VER TODOS LOS PUEBLOS</Link></ShowMore>
            </Component>
            
            <Component id="about">
            <Title>sobre nosotros</Title>
            <About/>
            </Component>

        </HomeContainer>
        
    )
}
import React, {useEffect} from "react";
import { HomeContainer, ShowMore, Component, Title} from "./StyleHome";
import Tours from "../Tours/Tours";
import Intro from "./Intro";
import Towns from "../Towns/Towns";
import CategoriesHome from "../Categories/Categories";
import About from "../About/About";
import {Link} from "react-router-dom"



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
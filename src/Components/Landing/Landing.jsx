import React from "react";
import { useState } from "react";
import {LandingContain,Title,NavBar,Item} from "./StyledLanding";
import { NavLink } from "react-router-dom";

export default function Landing(){

    let [darkMood, setDarkmood] = useState(false)
    
    
    const DarkMoodChange = () => {
        if (darkMood === false) setDarkmood(true)
        if (darkMood === true) setDarkmood(false)
    }
    
    // console.log(darkMood)


    return(
        <LandingContain >
            <NavBar >
            {/* <button onClick={DarkMoodChange}>holaa </button> */}
            <Title><NavLink to= '/'>INICIO</NavLink></Title>
            <Item></Item>
            <Item><NavLink to='/about'>About</NavLink></Item>
            <Item>culture</Item>
            <Item><NavLink to = '/servicios'>Servicios</NavLink></Item>
            <Item>Contacto</Item>
            
            </NavBar>
        </LandingContain>
    )
}
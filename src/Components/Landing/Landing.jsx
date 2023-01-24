import React from "react";
import { useState } from "react";
import {LandingContain,Title,NavBar,Item} from "./StyledLanding"
import { useNavigate } from "react-router-dom";

export default function Landing(){

    const navigate = useNavigate()

    let [darkMood, setDarkmood] = useState(false)
    
    
    const DarkMoodChange = () => {
        if (darkMood === false) setDarkmood(true)
        if (darkMood === true) setDarkmood(false)
    }
    
    // console.log(darkMood)
const Click = ()=>{
    navigate("/")
}

    return(
        <LandingContain >
            <NavBar >
            {/* <button onClick={DarkMoodChange}>holaa </button> */}
           <Title onClick={Click}>LA LINDA</Title>
            <Item></Item>
            <Item>About</Item> 
            <Item>culture</Item>
            <Item>Servicios</Item>
            <Item>Contacto</Item>
            
            </NavBar>
        </LandingContain>
    )
}
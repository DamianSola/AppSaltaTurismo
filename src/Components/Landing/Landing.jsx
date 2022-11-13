import React from "react";
import { useState } from "react";
import {LandingContain,Title,NavBar,Item} from "./StyledLanding"


export default function Landing(){

    let [darkMood, setDarkmood] = useState(false)
    
    
    const DarkMoodChange = () => {
        if (darkMood === false) setDarkmood(true)
        if (darkMood === true) setDarkmood(false)
    }
    
    // console.log(darkMood)


    return(
        <LandingContain darkMood>
            <NavBar>
            <button onClick={DarkMoodChange}>dark mood</button>
            <Title>LA LINDA</Title>
            <Item></Item>
            <Item>About</Item>
            <Item>culture</Item>
            <Item>Service</Item>
            <Item>Contacto</Item>
            
            </NavBar>
        </LandingContain>
    )
}
import React from "react";
import { useState, useEffect } from "react";
import {LandingContain, Title, NavBar, Item} from "./StyledLanding";
import { NavLink } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import styled from "styled-components";

const ServiList = styled.li`
margin: auto 0px;
display: block;
text-decoration: none;
list-style:none;
`
const Servi = styled.button`
text-decoration: none;
border-style: none;
color: black;
background-color: #00b2ec ;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 20px;

:hover{
    background-color: aliceblue;
}
`

const TypesList = styled.ul`
display:${props => props.display? "block" : "none"};
/* margin: none; */
padding: none;
background-color: #00b2ec ;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
position: absolute;
`
const Type = styled.li`
text-decoration: none;
list-style:none;
display: block;
text-align: left;
:hover{
    background-color: white ;
}
`
const Tname = styled.a`
text-decoration: none;
color: black;
display: block;
`

const StyleLink = styled(NavLink)`
text-decoration: none;
`



export default function Landing(){
    
    let [display , setDisplay] = useState(false)
    
    
    const {allServiceTypes} = useSelector(s => s)
    const dispatch = useDispatch()
    // console.log(darkMood)
    useEffect(()=>{
        dispatch(AllServiceType())
    },[])
    // <NavLink to = '/servicios'>Servicios</NavLink>

    return(
        <LandingContain >
            <NavBar >
            {/* <button onClick={DarkMoodChange}>holaa </button> */}
            <Title><StyleLink exact to= '/' >INICIO</StyleLink></Title>
            <Item></Item>
            <Item><StyleLink exact to='/about'>About</StyleLink></Item>
            <Item>culture</Item>
           <ServiList>
                <Servi onClick={() => display? setDisplay(false) : setDisplay(true)}>Servicios</Servi>
                <TypesList display = {display}>
                    {allServiceTypes && allServiceTypes.map(e => {
                        return <Type key={e.id}><Tname href={`/service/${e.id}`}>{e.name}</Tname></Type>
                    })}
				</TypesList>
			</ServiList>
            <Item>Contacto</Item>
            
            </NavBar>
        </LandingContain>
    )
}
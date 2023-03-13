import React from "react";
import { useState, useEffect } from "react";
import {LandingContain, Title, NavBar, Item} from "./StyledLanding";
import { NavLink, Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import styled from "styled-components";

const ServiList = styled.li`
margin: auto 0px;
display: block;
text-decoration: none;
list-style:none;
`
const Servi = styled.p`
text-decoration: none;
border-style: none;
color: white;
color: #7B0000;
/* background-color: #00b2ec ; */
background-color: #87CEFA;
/* font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; */
font-size: 22px;
`

const TypesList = styled.ul`
display:${props => props.display? "block" : "none"};
/* margin: none; */
padding: none;
/* background-color: #00b2ec ; */
background-color: #87CEFA;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
position: absolute;

`
const Type = styled.p`
text-decoration: none;
list-style:none;
/* display: block; */
text-align: left;


:hover{
    background-color: white ;
}
`
const Tname = styled(Link)`
text-decoration: none;
color: black;
display: block;

`

const StyleLink = styled(NavLink)`
text-decoration: none;
/* background-color: #00b2ec ; */
background-color: #87CEFA;
/* color: white; */
color: #7B0000
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
            <Title><StyleLink exact to= '/' >SALTA</StyleLink></Title>
            <Item></Item>
            <Item><StyleLink exact to='/about'>About</StyleLink></Item>
            <Item>culture</Item>
           <ServiList>
                <Servi onClick={() => display? setDisplay(false) : setDisplay(true)}>Servicios</Servi>
                <TypesList display = {display}>
                    {allServiceTypes && allServiceTypes.map(e => {
                        return <Type key={e.id}><Tname to={`/service/${e.id}`}>{e.name}</Tname></Type>
                    })}
				</TypesList>
			</ServiList>
            <Item>Contacto</Item>
            
            </NavBar>
        </LandingContain>
    )
}
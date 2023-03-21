import React from "react";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import styled from "styled-components";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const LandingContain = styled.div `
    border-top: solid 25px #87CEFA;
    height: 4rem;
    padding: none;
    position: static;
    /* background-color: #87CEFA; */
    width: 100%;
    margin: auto;

    ul{
        display: flex;
        justify-content: space-between;
        padding: none;
        margin: auto;
        background-color: #ECF0F1;
    }

    .home{
        font-size: 30px;
        text-decoration: none;
        color: #7B0000;
    }

    .item {
        text-decoration: none;
        color: #7B0000;
        font-size: 20px;
        padding: 6px;
    }

    .service{
        text-decoration: none;
        color: #7B0000;
        font-size: 20px;
        padding: 6px;
    }

    .dropdown{
        border-style: none;
        font-size: 20px;
        color: #7B0000;
        background-color: #ECF0F1;
    }
`

export default function Landing(){
    
    let [display , setDisplay] = useState(false)
    
    
    const {allServiceTypes} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(allServiceTypes)
    useEffect(()=>{
        dispatch(AllServiceType())
    },[])
    // <NavLink to = '/servicios'>Servicios</NavLink>

    return(
        <LandingContain>
            <ul>
                <Link className="home" exact to='/'>INICIO</Link>
                <Link className="item" exact to='/about'>Sobre nosotros</Link>
                <Link className="item">Contactos</Link>
                
            </ul>
        </LandingContain>
    )
}


 {/* <ServiList>
                <Servi onClick={() => display? setDisplay(false) : setDisplay(true)}>Servicios</Servi>
                <TypesList display = {display}>
                    {allServiceTypes && allServiceTypes.map(e => {
                        return <Type key={e.id}><Tname to={`/service/${e.id}`}>{e.name}</Tname></Type>
                    })}
				</TypesList>
			</ServiList> */}
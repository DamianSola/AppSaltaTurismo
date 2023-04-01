import React from "react";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const LandingContain = styled.div `
    border-top: solid 25px #87CEFA;
    min-height: 4rem;
    padding: none;
    /* position: static; */
    /* background-color: #87CEFA; */
    width: 100%;
    margin: auto;
    margin-bottom: 10px;

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
    
    let [dropDown , setDropDown] = useState(false)

    const OpenAndCloseDD = () => {
        setDropDown(!dropDown)
    }
    
    
    const {allServiceTypes} = useSelector(s => s)
    const dispatch = useDispatch()
    // console.log(allServiceTypes)
    useEffect(()=>{
        dispatch(AllServiceType())
    },[])
    // <NavLink to = '/servicios'>Servicios</NavLink>

    return(
        <LandingContain>
            <ul>
                <Link className="home" exact to='/'>INICIO</Link>
                <a className="item" href='#about'>Sobre nosotros</a>
                <a className="item" href='#towns'>Pueblos de Salta</a>
                <a className="item" href='#tours'>Tours</a>
                <Dropdown isOpen={dropDown} toggle={OpenAndCloseDD} >
                    <DropdownToggle className="dropdown">
                        Servicios</DropdownToggle>
                    <DropdownMenu>
                        {allServiceTypes && allServiceTypes.map(e => {
                            return <DropdownItem key={e.id} >
                                <Link className="item" exact to={`/service/${e.id}`}>{e.name}</Link>
                            </DropdownItem>
                        })}
                    </DropdownMenu>
                   
                </Dropdown>
                <Link className="item">Contactos</Link>
                <p></p>
                
            </ul>
        </LandingContain>
    )
}

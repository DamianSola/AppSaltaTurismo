import React from "react";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import 'react-dropdown/style.css';


const LandingContain = styled.div `
    border-top: solid 25px #7B0000;
    height: 90px;
    padding: none;
    /* background-color: #87CEFA; */
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    /* align-items: center; */

    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .home{
        /* font-size: 30px; */
        text-decoration: none;
        color: #7B0000;
        padding: none;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .item {
        text-decoration: none;
        color: #1a1a1a;
        /* font-size: 20px; */
        font-size: larger;
        transition: 1s;
        /* padding: 6px; */
    }

    .item:hover{
        text-decoration-line: underline;
    }
    .service{
        text-decoration: none;
        color: #1a1a1a;
        font-size: 20px;
        padding: 6px;
    }

    .dropdown{
        border-style: none;
        font-size: 20px;
        color: #1a1a1a;
        background-color: #FFFF;
    }

`
const Logo = styled.div`
    display: flex;
    align-items: center;

    .ese{
        font-size: 45px;
    }
    .a{
        font-size: 35px;
        color: black;
    }
    .aa{
        font-size: 40px;
    }
    .ele{
        font-size: 50px;
    }
    .te{
        font-size: 40px;
        color: black;
    }

`

export default function Landing(){
    
    let [dropDown , setDropDown] = useState(false)

    const OpenAndCloseDD = () => {
        setDropDown(!dropDown)
    }
    
    
    const {allServiceTypes} = useSelector(s => s)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(AllServiceType())
    },[])

    return(
        <LandingContain>
            <ul>
                <Link className="home" exact to='/'>
                    <Logo>
                        <p className="ese">S</p>
                        <p className="a">a</p>
                        <p className="ele">l</p>
                        <p className="te">t</p>
                        <p className="aa">a</p>
                    </Logo>
                </Link>
                <br/>
                <br/>
                <Link className="item" exact to='/'>Inicio</Link>
                <a className="item" href='#tours'>Tours</a>
                <a className="item" href='#towns'>Pueblos de Salta</a>
                <Dropdown isOpen={dropDown} toggle={OpenAndCloseDD} >
                    <DropdownToggle className="dropdown">Servicios</DropdownToggle>
                    <DropdownMenu children="true">
                        {allServiceTypes && allServiceTypes.map((e,i) => {
                            return <DropdownItem key={i} >
                                <Link className="item" exact to={`/service/${e.id}`}>{e.name}</Link>
                            </DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
                <a className="item" href='#about'>Sobre nosotros</a>
                <br/>
                {/* <Link className="item">Contactos</Link> */}
            </ul>
        </LandingContain>
    )
}
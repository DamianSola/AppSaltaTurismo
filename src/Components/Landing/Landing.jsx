import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LandingContain, Logo, BgDiv} from "./Styled";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from "reactstrap";
import 'react-dropdown/style.css';
import LogoSalta from "../LogoSalta";

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
                <LogoSalta color={"#930000"}/>
                <Link className="item" exact to='/'>Inicio</Link>
                <a className="item" href='#tours'>Tours</a>
                <a className="item" href='#towns'>Pueblos de Salta</a>
                <a className="item" href='#about'>Sobre nosotros</a>
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
                <br/>
               
                {/* <Link className="item">Contactos</Link> */}
            </ul>
        </LandingContain>
    )
}
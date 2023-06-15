import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LandingContain, BgDiv} from "./Styled";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from "reactstrap";
import 'react-dropdown/style.css';
import LogoSalta from "../LogoSalta";
import BurgerButton from "../BurgerButton/BurgerButton";
import WeatherMap from "./WeatherMap";

export default function Landing(){
    
    let [dropDown , setDropDown] = useState(false)
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    

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
            <LogoSalta color={"#930000"}/>
          
                {/* <ul className="itemsList">
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
                                        }
                                    )
                                }    
                            </DropdownMenu>
                    </Dropdown>
                    <WeatherMap/>
                </ul> */}
                
                <div className={`itemList ${isOpen ? 'active' : 'desactive'}`}>
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
                                        }
                                    )
                                }    
                            </DropdownMenu>
                    </Dropdown>
                    <WeatherMap/>
                </div>
                <div className="burger">
                    <BurgerButton handleClick={handleClick} isOpen={isOpen}/>
                </div>
        </LandingContain>
    )
}
import React from "react";
import { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {AllServiceType} from "../../Redux/Actions/Index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {LandingContain, Logo, BgDiv} from "./Styled";
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import 'react-dropdown/style.css';
import HamburgerButton from "./Burger";
import LogoSalta from "../LogoSalta";

export default function Landing(){
    
    let [dropDown , setDropDown] = useState(false)
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
    console.log('clicked antes del setState:', clicked);
    setClicked(!clicked);
    console.log('clicked después del setState:', clicked);
  }

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
                {/* <Link className="home" exact to='/'>
                    <Logo>
                        <p className="ese">S</p>
                        <p className="a">a</p>
                        <p className="ele">l</p>
                        <p className="te">t</p>
                        <p className="aa">a</p>
                    </Logo>
                </Link> */}
                <LogoSalta/>
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
            <div className="burger">
                    <HamburgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`${clicked ? 'active' : ''}`} />
        </LandingContain>
    )
}
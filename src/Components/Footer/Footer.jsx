import React from "react";
import { FooterContain, Parts } from "./StyleFooter";
import LogoSalta from "../LogoSalta";
import WeatherMap from "../Landing/WeatherMap";

export default function Footer(){

    return(
        <FooterContain>
            <Parts>
                <LogoSalta color={"#ffff"}/>
                <WeatherMap/>
            </Parts>
            <Parts>
                <a className="item" href='/'>Inicio</a>
                <a className="item" href='#tours'>Tours</a>
                <a className="item" href='#towns'>Pueblos de Salta</a>
                <a className="item" href='#about'>Sobre nosotros</a>
            </Parts>
            <Parts>
                <p>CONTACTO</p>
                <p>Damian Sola</p>
                <p>tel: 54-9 0387-467-2442</p>
                <p>e-mail: damiansola99@gmail.com</p>
            </Parts>
            <Parts>
                <p>REDES SOCIALES</p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/damiansola/" target="_blank">damiansola</a></p>
                <p>twitter: @solazdamian</p>
                <p>instagram: @damian_sola</p>
            </Parts>
        </FooterContain>
        
    )
}
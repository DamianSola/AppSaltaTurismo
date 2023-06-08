import React from "react";
import { FooterContain, Parts } from "./StyleFooter";
import LogoSalta from "../LogoSalta";

export default function Footer(){

    return(
        <FooterContain>
            <Parts>
            <a className="item" href='/'>Inicio</a>
                <a className="item" href='#tours'>Tours</a>
                <a className="item" href='#towns'>Pueblos de Salta</a>
                <a className="item" href='#about'>Sobre nosotros</a>
                <LogoSalta/>
            </Parts>
            <Parts>
                <p>CONTACTO</p>
                <p>Damian Sola</p>
                <p>tel: 54-9 0387-467-2442</p>
                <p>e-mail: damiansola99@gmail.com</p>
            </Parts>
            <Parts>
                <p>REDES SOCIALES</p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/damiansola/" >damiansola</a></p>
                <p>twitter: @solazdamian</p>
                <p>instagram: @damian_sola</p>
            </Parts>
        </FooterContain>
        
    )
}
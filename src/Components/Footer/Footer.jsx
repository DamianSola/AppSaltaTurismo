import React from "react";
import { FooterContain, Parts } from "./StyleFooter";
import LogoSalta from "../LogoSalta";

export default function Footer(){

    return(
        <FooterContain>
            <Parts>
                <p>imagenes de la pagina: google y otros lugares</p>
                <p>desarrollador: Damian Sola</p>
                <p>diseñador: Damian Sola</p>
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
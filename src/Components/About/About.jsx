import React from "react";
import { AboutContain } from "./AboutStyled";


const About = () => {

    // la idea es podes cambiar el ontenido de about. temporalmente tendra un texto explicando la funcion de la pagina
    // quienes somos, etc.

    return(
        <AboutContain>
            <h6>
                <h5>Esta es una pagina web informativa de la provincia de Salta. Cuenta con los espacios y servicios turisticos mas destacados de la provincia.</h5>
            </h6>
        </AboutContain>
    )
}
export default About;

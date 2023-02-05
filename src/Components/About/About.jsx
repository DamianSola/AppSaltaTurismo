import React from "react";
// import { Link } from "react-router-dom";
import { AboutContain } from "./AboutStyled";


const About = () => {

    // la idea es podes cambiar el ontenido de about. temoralmente tendra un texto explicando la funcion de la pagina
    // quienes somos, etc.

    return(
        <AboutContain>
            <h4>
                Esta es una pagina web de la provincia de Salta. Aqui presentamos sus principales atracciones turisticas, pueblos, monumentos etc. Esta pagina fue creada con el motivo de incentivar el turismo en Salta dandola a conocr un poco mas
            </h4>
        </AboutContain>
    )
}
export default About;

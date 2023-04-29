import React from "react";
import { AboutContain } from "./AboutStyled";


const About = () => {

    // la idea es podes cambiar el ontenido de about. temporalmente tendra un texto explicando la funcion de la pagina
    // quienes somos, etc.

    return(
        <AboutContain>
            <div>
                <p>¡Hola! 
                    Mi nombre es Damian Sola. Soy desarrollador web, e hice esta pagina para que conozcan mi provincia.
                    Mientras buscaba trabjo un dia me inspire para hacer una pagina propio y que tenga una utilidad, sin fines de lucro, nada ma para mostrar mi Salta y por supuesto mostras mis habilidades como desarrollador.
                    La pagina consiste prinipalmente en conocer mejor la provincia de Salta y cuales son sus principales atraciones. Tiene un sector de actividades y atracciones, otro de recorridos, y otra parte mustra los pueblos mas viejos y atractivos del norte argentino.
                    Tambien tiene un sector aparte de sevicios de turismo (hospedaje, empresas de turismo, etc) por si quieres saber mas.
                    ¡Gracias por visitar la pagina y espero que la disfrutes!
                </p>
            </div>
        </AboutContain>
    )
}
export default About;

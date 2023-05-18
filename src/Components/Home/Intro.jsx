import React from "react";
import { ImagePresentation, Texto } from "./StyleHome";
import photo from "./ciudadDeSalta.jpg"

const Intro = () => {

    let backImage = {        
        backgroundImage: 'url(' + photo + ')'
    }
return(
    <ImagePresentation style={backImage}>
        <Texto>Provincia de Salta</Texto>
    </ImagePresentation>
)
}

export default Intro;
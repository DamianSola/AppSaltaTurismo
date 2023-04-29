import React from "react";
import styled from "styled-components";
// import { ImagePresentation, Image } from "./StyleHome";
import photo from "./ciudadDeSalta.jpg"


const ImagePresentation = styled.div`
display: block;
position: relative;
width: 100%;
/* height: 460px; */
/* height: 100%; */
padding: 180px 0 ;
background-position: center ;
background-size: cover;
margin: auto;
align-items: center;
`

const Texto = styled.h1`
    /* padding-top: 13rem; */
    margin: auto;
    /* font-style: oblique; */
    font-family:"Pacifico";
    color: white;
    font-size: 100px;
    transition: 2s;
    width: 100%;
    text-shadow: 5px 5px 5px black;
`

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
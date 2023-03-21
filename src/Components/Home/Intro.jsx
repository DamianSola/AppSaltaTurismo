import React from "react";
import styled from "styled-components";
// import { ImagePresentation, Image } from "./StyleHome";
import photo from "./ciudadDeSalta.jpg"


const ImagePresentation = styled.div`
display: block;
position: relative;
width: 100%;
/* height: 500px; */
height: 100%;
padding: 200px 0 ;
background-position: center ;
background-size: cover;
margin: auto;
`

const Texto = styled.h1`
    /* padding-top: 13rem; */
    margin: auto;
    font-style: oblique;
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
        {/* <Image src={photo} /> */}
        <Texto>SALTA</Texto>
    </ImagePresentation>
)
}

export default Intro;
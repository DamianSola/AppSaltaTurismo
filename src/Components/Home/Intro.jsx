import React from "react";
import styled from "styled-components";
// import { ImagePresentation, Image } from "./StyleHome";
import photo from "./ciudadDeSalta.jpg"


const ImagePresentation = styled.div`
display: block;
/* display: inline-block; */
position: relative;
width: 100%;
height: 500px;
background-position: center ;
background-size: cover;
`

// const Image = styled.img`
// width: 100%;
// height: 30rem;
// `

const Texto = styled.h1`
    padding-top: 13rem;
    /* margin: 20%; */
    font-style: oblique;
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
    color: white;
    font-size: 60px;
    transition: 2s;
    width: 100%;
    text-shadow: 5px 5px 5px black;

    /* :hover{
      font-size: 70px;

    } */
`

const Intro = () => {

    let backImage = {        
        backgroundImage: 'url(' + photo + ')'
    }
return(
    <ImagePresentation style={backImage}>
        {/* <Image src={photo} /> */}
        <Texto>PROVINCIA DE SALTA</Texto>
    </ImagePresentation>
)
}

export default Intro;
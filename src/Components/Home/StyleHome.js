import styled from "styled-components";
// import { darkMod } from "./Home";
import {Link} from "react-router-dom";
import { Button } from "reactstrap";


export const HomeContainer = styled.div`
display: block;
margin:auto ;
    @media (min-width: 420px){
        
    }
`

export const Title = styled.h1`
    color:black;
    transition: 0.3s;
    font-family: 'Exo 2', sans-serif;
    margin: 20px;
` 
export const Component = styled.div`
    display: block;
    padding: 20px 0;
`
export const ShowMore = styled(Button)`
    background-color: black;
    margin: 20px;

    .link{
        text-decoration: none;
        color: #ffff;
    }
`

export const ImagePresentation = styled.div`
display: block;
position: relative;
width: 100%;
padding: 180px 0 ;
background-position: center ;
background-size: cover;
margin: auto;
align-items: center;
    @media (max-width: 420px){
        height: 300px;
        padding: 0 ;
    }
`

export const Texto = styled.h1`
    /* padding-top: 13rem; */
    margin: auto;
    font-family: 'Exo 2', sans-serif;
    color: white;
    font-size: 100px;
    transition: 2s;
    width: 100%;
    text-shadow: 5px 5px 5px black;

    @media (max-width: 420px){
    font-size: 70px;
    }
`
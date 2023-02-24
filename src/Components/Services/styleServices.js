import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServiceContain = styled.div`
display:block;
/* justify-content: space-between; */
/* flex-wrap:wrap; */
`
export const OnlyService = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: left;

`
export const ServicesTypes = styled.div`
display: flex;
justify-content: left;
flex-wrap: wrap;
`
export const Types = styled.h1`
display: flex;
margin:1rem;
width: 570px;
/* padding: 0 10px; */
/* text-align: left; */
justify-content: space-between;
background-color: #00b2ec ;
transition: 0.5s;
:hover{
    background-color: #7B0000;
    
}
`

export const Title = styled.h1`
text-align: left;
margin:1rem;
padding: 10px;
`
export const TypeName = styled(Link)`
text-decoration: none;
color: black;
margin: auto;
`
export const Photo = styled.img`
width: 70px;
height: 70px;
margin: auto 0;
`
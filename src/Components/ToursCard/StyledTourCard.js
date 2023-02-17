import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cardcontainer = styled.div`
width: 18.5rem;
height: 16rem;
margin: 9px;
/* border-radius: 4%; */
border: solid 1px;

/* background-color:#F5F5F5; */

&&:hover{
    opacity: 0.9;
}
` 
export const ImagenCard = styled.img`
width: 18.5rem;
/* height: 15rem; */

`
export const Title = styled.h3`
/* margin-top: 0%; */
text-align: center;
text-decoration: none;
font-style: none;
/* align-items: center; */
color: black;
font-size: 20px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const StyleLink = styled(Link)`
text-decoration:none
`
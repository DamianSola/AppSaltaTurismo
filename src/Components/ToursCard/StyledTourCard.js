import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cardcontainer = styled.div`
/* width: 18.5rem; */
width: 16.5rem;

margin: 9px;
border: solid 1px;
transition: 0.5s;

&&:hover {
    box-shadow: 10px 10px 10px;
}
` 
export const ImagenCard = styled.img`
width: 16.5rem;
/* width: 100%; */


`
export const Title = styled.h3`
display: block;
text-align: center;
text-decoration: none;
font-style: none;
color: black;
font-size: 20px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;


`
export const StyleLink = styled(Link)`
text-decoration:none
`
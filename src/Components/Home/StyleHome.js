import styled from "styled-components";
// import { darkMod } from "./Home";
import {Link} from "react-router-dom"

export const HomeContainer = styled.div`
display: block;
/* background-color: black; */
margin:auto 5%;

`

export const secondContainer = styled.div`
display:block;
`


export const StyleLink = styled(Link)`
text-decoration: none;
color: black;
transition: 0.3s;
:hover{
    color:bisque;
}
`
import styled from "styled-components";
// import { darkMod } from "./Home";
import {Link} from "react-router-dom"

export const HomeContainer = styled.div`
display: block;
/* background-color: black; */

`

export const secondContainer = styled.div`
display:block;
`

export const ImagePresentation = styled.div`
display: block;
background-repeat: no-repeat;
background-position: center;
/* justify-content: space-between; */
width: 100%;
`

export const Image = styled.img`
width: 100%;

`

export const StyleLink = styled(Link)`
text-decoration: none;
`
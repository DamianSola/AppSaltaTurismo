import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServiceContain = styled.div`
display:block;
/* justify-content: space-between; */
/* flex-wrap:wrap; */
  div{
    display:flex;
  }
`
export const OnlyService = styled.div`
display:flex;
flex-wrap:wrap;
width: 75%;
/* align-items: center; */
margin: auto;
/* justify-content: left; */

`
export const ServicesTypes = styled.div`
display: flex;
flex-direction: column;
width: 22%;
margin: 0 20px;
border-right: solid 0.5px grey;
`
export const Types = styled.p`
display: flex;

`

export const Title = styled.h1`
text-align: left;
margin:1rem;
padding: 10px;
p{
    font-size: 15px;
}
`
export const TypeName = styled(Link)`
text-decoration: none;
color: black;
margin: auto;
`
export const Photo = styled.img`
width: 40px;
height: 40px;
margin: auto 0;
`
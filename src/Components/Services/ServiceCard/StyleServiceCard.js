import styled from "styled-components";
import { Card,CardTitle  } from "reactstrap";

export const Head = styled.div`
display:flex;
/* width: 400px; */
width: 100%;
justify-content: left;
background-size: cover;
border-bottom: solid 0.5px grey;

`

export const CardService = styled(Card)`
display:block;
justify-content: left;
background-size: cover;
margin: 10px;
padding: 10px;
width: 450px;
`

export const Photo = styled.img`
/* width: 12rem; */
width: 150px;
`
export const CardName = styled(CardTitle)`
/* margin-top: 50%; */
margin: auto;
font-size: 40px;
`

export const Data = styled.p`
display: block;
padding: none;
margin: auto;
text-align: left;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
`

export const Key = styled.p`
padding: none;
margin: auto;
`

export const Value = styled.a`
text-decoration: none;
color: black;
text-align: left;
padding: none;
margin: 3rem;

`
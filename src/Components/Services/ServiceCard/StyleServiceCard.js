import styled from "styled-components";


export const CardService = styled.div`
display:block;
width: 18rem;
height: 20rem;
background-repeat: no-repeat;
background-size: cover;
margin: 1rem;
border: solid grey;
border-radius: 2%;
color: rgba( 253, 254, 254, 0);

&&:hover{
    opacity: 0.6;
    color: black;
}
`

export const CardName = styled.h1`
margin-top: 50%;
font-size: 30px;
`
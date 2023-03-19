import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
/* display: flex; */
width: 100%;
`
export const LinkDetail = styled(Link)`
text-decoration: none;
`

export const CountainResume = styled.div`
display: grid;
grid-template-columns: 300px 300px 300px;
justify-content: center;
`

export const Bock = styled.div`
/* display: flex; */
font-size: large;
margin: 5px; 
background-color: #FFFFFF;
border: solid 0.5px black;
transition-duration: 0.4s;


:hover{
    /* background-color: #00b2ec; */
    background-color: #ECF0F1;
    }
`

export const NameTable = styled.p`
size: 10px;
color: #7B0000;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const Amount = styled.p`
size:20px;
color: #7B0000;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`


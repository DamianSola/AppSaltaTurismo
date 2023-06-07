import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Admin = styled.h5`
    margin: 10px;
    color: #7B0000;
`

export const Container = styled.div`
display: flex;
width: 100%;
min-height: 24rem;
flex-wrap: wrap;

.sesions{
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
}
`
export const LinkDetail = styled(Link)`
text-decoration: none;
`

export const CountainResume = styled.div`
display: grid;
grid-template-columns: 220px 220px 220px;
grid-template-rows: 90px 90px 90px;
justify-content: center;
flex-wrap: wrap;
`

export const Bock = styled.div`
/* display: flex; */
font-size: large;
width: 200px;
height: 70px;
padding: none;
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
/* size: 10px; */
padding: none;
color: #7B0000;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const Amount = styled.p`
/* size:20px; */
padding: none;
color: #7B0000;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`


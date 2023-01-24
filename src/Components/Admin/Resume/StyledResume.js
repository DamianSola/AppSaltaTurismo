import styled from 'styled-components'


export const CountainResume = styled.div`
display: flex;
flex-direction: row;
/* justify-content: space-around; */
justify-content: center;
margin: auto 10%;
flex-wrap: wrap;
/* width: 70rem; */
padding: 10px;
background-color: #F5F5F5;
border-radius: 10px;
`

export const Activities = styled.div`
display: block;
padding: 28px;
/* border: solid 2px; */
border-radius: 5px;
font-size: xx-large;
margin: 5px; 
/* background-color: #7B0000; */
background-color: #FFFFFF;
transition-duration: 0.4s;

:hover{
    background-color: #00b2ec;
    }
`

export const NameTable = styled.p`
size: 10px;
/* color: white; */
color: #7B0000;
font-family: 'Courier New', Courier, monospace;
`

export const Amount = styled.p`
size:15px;
color: #7B0000;
font-family: 'Courier New', Courier, monospace;
/* font-size: x-small; */
`


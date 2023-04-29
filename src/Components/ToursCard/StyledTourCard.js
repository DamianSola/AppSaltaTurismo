import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cardcontainer = styled.div`
/* width: 18.5rem; */
width: 18rem;
border-radius: 2px;
margin: 10px 5px;
border: solid 1px;
transition: 0.5s;
height: 350px;

.title{
        font-size: 30px;
        margin: auto;
        /* color: #7B0000; */
        /* background-color: black; */
        /* position: absolute; */
    }

&&:hover {
    box-shadow: 0px 0px 10px;
    /* width: 17.5rem; */
}
` 
export const ImagenCard = styled.img`
/* width: 16.5rem; */
width: 100%;
height: 200px;
position: relative;
bottom: 0%;
`
export const Title = styled.div`
display: block;
text-align: center;
text-decoration: none;
color: black;
padding: 5px;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
/* font-family: Arial, Helvetica, sans-serif; */

   

    .description{
        margin: auto;
        color:grey;
    }


`
export const StyleLink = styled(Link)`
text-decoration:none
`
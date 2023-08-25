import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cardcontainer = styled.div`
width: 95%;
border-radius: 2px;
margin: auto;
border: solid 1px;
transition: 0.5s;
height: 350px;

.title{
        font-size: 25px;
        margin: auto;

    }

&&:hover {
    box-shadow: 0px 0px 10px;
}

@media((max-width:700px)and(min-width:480px)){
    .title{
        font-size: 15px;
    }
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

    @media((max-width:700px)and(min-width:480px)){
        .title{
        font-size: 15px;
        }
    .description{
        font-size: 12px;
    }
}


`
export const StyleLink = styled(Link)`
text-decoration:none
`
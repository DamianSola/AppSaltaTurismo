import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"

const Card = styled.div`
display: flex;
width: 19rem;
height: 20rem;
background-repeat: no-repeat;
background-size: cover;
margin:5px;
color: rgba( 253, 254, 254, 0);

:hover{
    /* width: 18.5rem; */
    /* opacity: 0.6; */
    color: black;
    /* background-color: black; */
}
`

const NameCategory = styled.h2`
justify-content: center;
font-size: 30px;
`

const StyleLink = styled(Link)`
text-decoration: none;
`

const CategoriesCard = ({image, name, id}) =>{

    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }



    return(
        <StyleLink exact to={`/categories/${id}`} id="App-links">
        <Card style={backImage}>
            <NameCategory>{name}</NameCategory>
        </Card>
        </StyleLink>
    )
}

export default CategoriesCard;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"

const Card = styled.div`
display: block;
width: 300px;
/* height: 20rem; */
margin:5px;
border: solid 0.5px;
/* color: rgba( 253, 254, 254, 0); */
color: black;
transition: 1s;

:hover{
    color: black;
    /* background-size: auto; */
}
`

const NameCategory = styled.h2`
display: block;
position: relative;
color: black;
/* text-align: left; */
font-size: 20px;
transition: 1s;
/* padding: none; */
:hover{
    /* translate: calc(12%); */
    font-size: 18px;
}
`

const StyleLink = styled(Link)`
text-decoration: none;
`

const CategoriesCard = ({image, name, id}) =>{

    
    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }

   



    return(
        <Card> 
            <img src={image} width="100%" />
            <StyleLink exact to={`/categories/${id}`} id="App-links">
                <NameCategory>{name}</NameCategory>
            </StyleLink>
        </Card>
    )
}

export default CategoriesCard;

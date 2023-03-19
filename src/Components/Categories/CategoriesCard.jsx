import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"
import { useDispatch } from "react-redux";
import {getOneCategory} from "../../Redux/Actions/Index"

const Card = styled.div`
display: block;
margin:5px;
border: solid 0.5px;
border-radius: 5px;
color: black;
transition: 0.5s;
background-color: white;
text-align: center;
height: 20rem;

:hover{
    .NameCategory{
        box-shadow: 3px 3px 3px;

    }

}

`

const NameCategory = styled.h2`
display: block;
color: black;
font-size: 19px;
font-family:arial;
transition: 0.5s;

`

const StyleLink = styled(Link)`
text-decoration: none;
margin:0 5px;
color: black;
`

const Photo = styled.img`
width: 100%;
border-radius: 5px 5px 0 0 ;

`
const SeeMore = styled.p`
    background-color: black;
    color: white;
    margin: auto;
    font-style: italic;
    font-size: 20px;
    padding: 5px;
    width: 60%;
    border-radius: 10px;
    transition: 0.2s;

    :hover{
    font-size: 22px;

    }
`

const CategoriesCard = ({image, name, id}) =>{

    
    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }

    const dispatch = useDispatch()


    return(
        <Card> 
            <Photo src={image} width="100%" />
            <NameCategory>{name}</NameCategory>
            <StyleLink exact to={`/categories/${id}`} onChange={() => {dispatch(getOneCategory(id))
}} id="App-links">               
                <SeeMore>Ver mas {">"}</SeeMore>
            </StyleLink>
        </Card>
    )
}

export default CategoriesCard;

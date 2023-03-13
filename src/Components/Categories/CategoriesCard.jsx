import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"
import { useDispatch } from "react-redux";
import {getOneCategory} from "../../Redux/Actions/Index"

const Card = styled.div`
display: block;
/* width: 300px; */
margin:5px;
border: solid 0.5px;
border-radius: 3px;
color: black;
transition: 0.5s;
/* background-color: #eeeeee ; */
background-color: white;
align-items: center;
box-shadow: 0px 0px 5px;

:hover{
    .NameCategory{
        box-shadow: 3px 3px 3px;

    }

}

`

const NameCategory = styled.h2`
display: block;
/* position: fixed; */
color: black;
font-size: 19px;
font-family:arial;
transition: 0.5s;

/* :hover{
    display: block;
} */
`

const StyleLink = styled(Link)`
text-decoration: none;
margin:0 5px;
color: black;
`

const Photo = styled.img`
width: 100%;
/* height: 100%; */
`
const SeeMore = styled.p`
    /* text-align: right; */
    margin: 5px;
    font-style: italic;
    font-size: 20px;
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

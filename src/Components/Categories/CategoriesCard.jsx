import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"
import { useDispatch } from "react-redux";
import {getOneCategory} from "../../Redux/Actions/Index"
import { Button } from "reactstrap";

const Card = styled.div`
display: block;
margin:5px;
width: 25%;
height: 300px;
border: solid 0.5px;
border-radius: 5px;
color: black;
transition: 0.5s;
text-align: center;
`

const NameCategory = styled.h2`
display: block;
margin: 4px;
padding: 4px;
color: #ffff;
text-shadow: 2px 2px 2px black;
font-size: 19px;
font-family:arial;
transition: 0.5s;

`

const StyleLink = styled(Link)`
text-decoration: none;
margin:0 5px;
color: black;
`
const SeeMore = styled(Button)`
    background-color: black;
    position: relative;
    top: 72%;
    /* bottom: 15%; */
`

const CategoriesCard = ({image, name, id}) =>{

    
    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }

    const dispatch = useDispatch()


    return(
        <Card style={backImage}> 
            <NameCategory>{name}</NameCategory>
            <StyleLink exact to={`/categories/${id}`} onChange={() => {dispatch(getOneCategory(id))}} id="App-links">
                <SeeMore>Ver mas</SeeMore>
            </StyleLink>
        </Card>
    )
}

export default CategoriesCard;

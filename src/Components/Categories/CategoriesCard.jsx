import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../App.css"
import { useDispatch } from "react-redux";
import {getOneCategory} from "../../Redux/Actions/Index"
import { Button } from "reactstrap";

const Card = styled.div`
display: block;
margin: auto ;
/* margin: auto 25px; */

width: 90%;
height: 400px;
border: solid 0.5px;
border-radius: 5px;
color: black;
transition: 0.5s;
text-align: center;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
    .description{
        display: block;
        background-color: #000000cb;
        color:white;
        position: relative;
        bottom: -85%;    
        transition: 1s;
    }
    &:hover .description{
        bottom: -40%;       
    }
    @media (max-width: 420px){
        width: 18rem;
        
    }
`

const NameCategory = styled.h2`
display: block;
margin: 4px;
padding: 4px;
color: #ffff;
text-shadow: 2px 2px 2px black;
font-size: 25px;
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
`


const CategoriesCard = ({image, name, id, description}) =>{

    
    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }

    const dispatch = useDispatch()


    return(
        <Card style={backImage}> 
            <NameCategory>{name}</NameCategory>
            <StyleLink exact to={`/categories/${id}`} onChange={() => {dispatch(getOneCategory(id))}} id="App-links">
                {/* <SeeMore>Ver mas</SeeMore> */}
                <div className="description">{description.slice(0,300)}...</div>  
            </StyleLink>
        </Card>
    )
}

export default CategoriesCard;

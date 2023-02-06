import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Card = styled.div`
display: block;
width: 19rem;
height: 20rem;
background-repeat: no-repeat;
background-size: cover;
margin:5px;
/* border: solid grey; */
/* border-radius: 2%; */
color: rgba( 253, 254, 254, 0);

:hover{
    /* width: 18.5rem; */
    opacity: 0.6;
    color: black;
}
`

const NameCategory = styled.h2`
margin-top: 50%;
font-size: 30px;
`

const CategoriesCard = ({image, name, id}) =>{

    let backImage = {        
        backgroundImage: 'url(' + image + ')'
    }


    return(
        <Link to={`/categories/${id}`}>
        <Card style={backImage}>
            <NameCategory>{name}</NameCategory>
        </Card>
        </Link>
    )
}

export default CategoriesCard;

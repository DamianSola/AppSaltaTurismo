import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Card = styled.div`
    display: block;
    margin: 1rem;
    width: 15rem;
    border: solid 1px;
`
const Photo = styled.img`
    width: 15rem;

`
const Name = styled.p`
    
`

const SubCategoryCard = ({name, id, image}) => {
    return(
        <Card>
            <Photo src={image}/>
            <Name>{name}</Name>
            <Link to={`/sub-categories/${id}`}>Ver mas...</Link>
        </Card>
    )
}

export default SubCategoryCard;
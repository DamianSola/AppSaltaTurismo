import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled componets
const Card = styled.div`
    display: block;
    margin: 7px;
    width: 24%;
    border: solid 1px;
    border-radius: 10px;
    transition: 0.5s;

    :hover{
        /* border: 3px; */
        background-color: #F8F9F9 ;
    }

`

const Photo = styled.img`
    width: 100%;
    border-radius: 10px 10px 0 0;
`
const Name = styled.div`
    padding: 5px;
   .name{
    font-size: 25px;
    text-decoration: none;
    margin: auto;
   }

   .description{
    margin: auto;
    color:grey;
   }
`

const StyleLink = styled(Link)`
text-decoration: none;
color:black;
`

const TownCard = ({name, image, id, description}) => {


    return(
        <Card>
            <StyleLink to= {`/town/${id}`}>
            <Photo src={image}/>
            <Name>
                <p className="name">{name}</p>
                <p className="description">{description.slice(0.50)} ...mas</p>
            </Name>
            </StyleLink>
        </Card>
    )
}

export default TownCard;

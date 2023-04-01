import React, { createContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Card} from "reactstrap";


const CardConainer = styled(Card)`
    margin: 10px;
    width: 300px;
    height: 300px;
`
const Photo = styled.img`
    width: 100%;
    /* border-radius: 10px; */

`
const Name = styled.p`
    text-align: center;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* padding: none; */
    /* margin: 0 0 30px 0; */
    margin: auto;

`
const SeeMore = styled(Link)`
text-decoration: none;
margin: auto;
color: black;
font-size: 20px;
padding: 5px;
border-radius: 5px;
transition: 0.2s;

:hover{
    color: white;
    background-color: black;

}
`
const SeeText = styled.p`
    /* text-align: right; */
    margin:0 0 0 5px;
`
const BodyCard = styled.div`
    padding: none;
    margin: auto;
`
const SubCategoryCard = ({name, id, image, showButton, category}) => {

    return(
        <CardConainer>
            <Name>{name}</Name>
            <Photo src={image}/>
            <BodyCard>
            <SeeText>
                {
                    showButton && <SeeMore exact to={`/sub-categories/${id}`}>Ver mas </SeeMore>
                }{
                    category && <p>{category}</p>
                }

            </SeeText>
            </BodyCard>
        </CardConainer>
    )
}

export default SubCategoryCard;
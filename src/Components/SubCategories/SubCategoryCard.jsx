import React, { createContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Card = styled.div`
    display: block;
    margin: 0.5rem;
    /* width: 15rem; */
    width: 23%;
    /* -webkit-box-shadow: 15px 23px 34px -27px ; */
    box-shadow: 9px 4px 22px -4px rgba(0,0,0,0.75);
    border: solid 1px;
`
const Photo = styled.img`
    width: 100%;
`
const Name = styled.p`
    text-align: center;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: none;
    margin: 0 0 30px 0;

`
const SeeMore = styled(Link)`
text-decoration: none;
color: black;
font-size: 20px;

:hover{
    color: #7B0000;
}
`
const SeeText = styled.p`
    text-align: right;
    margin:0 0 0 5px;
`
const BodyCard = styled.div`
    padding: none;
    margin: auto;
`
const SubCategoryCard = ({name, id, image}) => {

    return(
        <Card>
            <Photo src={image}/>
            <BodyCard>
            <Name>{name}</Name>
            <SeeText>
                <SeeMore exact to={`/sub-categories/${id}`}>Ver mas {" >"}</SeeMore>
            </SeeText>
            </BodyCard>
        </Card>
    )
}

export default SubCategoryCard;
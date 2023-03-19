import React, { createContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Card = styled.div`
    display: block;
    margin: 10px;
    padding: 5px;
    width: 250px;
    height: 250px;
    border: solid 1px;
    border-radius: 10px;
    text-align: center;
`
const Photo = styled.img`
    width: 100%;
    border-radius: 10px;

`
const Name = styled.p`
    text-align: center;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    /* padding: none; */
    margin: 0 0 30px 0;

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
        <Card>
            <Photo src={image}/>
            <BodyCard>
            <Name>{name}</Name>
            <SeeText>
                {
                    showButton && <SeeMore exact to={`/sub-categories/${id}`}>Ver mas {" >"}</SeeMore>
                }{
                    category && <p>{category}</p>
                }

            </SeeText>
            </BodyCard>
        </Card>
    )
}

export default SubCategoryCard;
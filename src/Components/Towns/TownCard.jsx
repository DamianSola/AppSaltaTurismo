import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled componets
const Card = styled.div`
    display: block;
    /* width: 18.5rem; */
    margin: 7px;
    width: 24%;
    border: solid 1px;
    transition: 0.5s;

    :hover{
        /* border: 3px; */
        box-shadow: -10px 10px 10px;

    }

`

const Photo = styled.img`
    /* width: 18.5rem; */
    width: 100%;
`
const Name = styled.p`
    font-size: 20px;
    text-decoration: none
`

const StyleLink = styled(Link)`
text-decoration: none;
color:black;


`

const TownCard = ({name, image, id}) => {


    
    return(
        <Card>
            <StyleLink to= {`/town/${id}`}>
            {/* <Photo src={image}/> */}
            <Photo src='https://buckets3.glanacion.com/lntools/anexos/fotos/72/30072w1366q100.jpg'/>
            <Name>{name}</Name>
            </StyleLink>
        </Card>
    )
}

export default TownCard;

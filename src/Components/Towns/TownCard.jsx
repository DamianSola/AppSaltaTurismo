import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

// Styled componets
const Card = styled.div`
    display: block;
    width: 18.5rem;
    margin: 7px;
    border: solid 1px;

`

const Photo = styled.img`
    width: 18.5rem;
`
const Name = styled.p`
    font-size: 20px;
    text-decoration: none
`

const TownCard = ({name, image, id}) => {

    return(
        <Card>
            <Link to= {`/town/${id}`}>
            {/* <Photo src={image}/> */}
            <Photo src='https://buckets3.glanacion.com/lntools/anexos/fotos/72/30072w1366q100.jpg'/>
            <Name>{name}</Name>
            </Link>
        </Card>
    )
}

export default TownCard;

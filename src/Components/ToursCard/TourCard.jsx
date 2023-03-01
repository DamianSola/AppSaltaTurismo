import React from "react";
import { Cardcontainer, ImagenCard, Title, StyleLink } from "./StyledTourCard";
import {useLocation, useParams} from "react-router-dom"



const TourCard = ({title, image, id}) => {

    return(
        <Cardcontainer>
            <StyleLink exact to={`/tours/${id}`} >
            <ImagenCard src={image}/>
            <Title>{title}</Title>
            </StyleLink>
        </Cardcontainer>
    )    
}

export default TourCard;

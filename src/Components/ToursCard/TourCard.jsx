import React from "react";
import { Cardcontainer, ImagenCard, Title, StyleLink } from "./StyledTourCard";



const TourCard = ({title, image, id}) => {

    return(
        <Cardcontainer>
            <StyleLink to={`tours/${id}`} >
            <ImagenCard src={image}/>
            <Title>{title}</Title>
            </StyleLink>
        </Cardcontainer>
    )    
}

export default TourCard;

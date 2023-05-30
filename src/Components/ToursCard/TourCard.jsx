import React from "react";
import { Cardcontainer, ImagenCard, Title, StyleLink } from "./StyledTourCard";



const TourCard = ({title, image, id, description}) => {

    return(
        <Cardcontainer>
            <StyleLink exact to={`/tours/${id}`} >
            <Title>
                <ImagenCard src={image && image[0]}/>
                <p className="title"> {title}</p>
                <p className="description">{description.slice(0,50)} ...mas</p>    
            </Title>
            </StyleLink>
        </Cardcontainer>
    )    
}

export default TourCard;

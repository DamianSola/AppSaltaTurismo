import React from "react";
import { Cardcontainer, ImagenCard, Title, StyleLink } from "./StyledTourCard";
import {useLocation, useParams} from "react-router-dom"



const TourCard = ({title, image, id, description}) => {

    return(
        <Cardcontainer>
            <StyleLink exact to={`/tours/${id}`} >
            <ImagenCard src={image}/>
            <Title>
                <p className="title"> {title}</p>
                <p className="description">{description.slice(0,50)} ...mas</p>    
            </Title>
            </StyleLink>
        </Cardcontainer>
    )    
}

export default TourCard;

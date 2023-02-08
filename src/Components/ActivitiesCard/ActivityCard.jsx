import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledCards";


const ActivityCard = ({title, image, likes}) => {


    return(
        <Cardcontainer>
            <ImagenCard src={image}/>
            <Title>{title}</Title>
            <p>likes: {likes}</p>
        </Cardcontainer>
    )    
}

export default ActivityCard;

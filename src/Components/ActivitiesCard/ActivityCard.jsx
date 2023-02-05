import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledCards";


const ActivityCard = ({title, image}) => {


    return(
        <Cardcontainer>
            <ImagenCard src={image}/>
            <Title>{title}</Title>
        </Cardcontainer>
    )    
}

export default ActivityCard;

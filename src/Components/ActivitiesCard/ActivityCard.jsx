import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledCards";


const ActivityCard = ({title, image}) => {

   

    // let backImage = {        
    //     backgroundImage: 'url(' + hadcode.image + ')'}

    return(
        <Cardcontainer>
            <Title>{title}</Title>
            <ImagenCard src={image}/>
        </Cardcontainer>
    )    
}

export default ActivityCard;

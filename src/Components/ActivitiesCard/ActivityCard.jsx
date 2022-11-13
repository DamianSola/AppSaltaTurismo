import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledCards";


const ActivityCard = ({title, image}) => {

   

    // let backImage = {        
    //     backgroundImage: 'url(' + hadcode.image + ')'}

    return(
        <Cardcontainer>
            <ImagenCard src={image}/>
            <Title>actividades al aire libre</Title>
        </Cardcontainer>
    )    
}

export default ActivityCard;

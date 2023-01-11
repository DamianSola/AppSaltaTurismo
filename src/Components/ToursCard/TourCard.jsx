import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledTourCard";


const TourCard = ({title, image}) => {

   

    // let backImage = {        
    //     backgroundImage: 'url(' + hadcode.image + ')'}

    return(
        <Cardcontainer>
            <ImagenCard src={image}/>
            <Title>{title}</Title>
        </Cardcontainer>
    )    
}

export default TourCard;

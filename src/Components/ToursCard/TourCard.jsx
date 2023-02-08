import React from "react";
import { Cardcontainer, ImagenCard, Title } from "./StyledTourCard";
import {Link} from 'react-router-dom';



const TourCard = ({title, image, id}) => {

   

    // let backImage = {        
    //     backgroundImage: 'url(' + hadcode.image + ')'}

    return(
        <Cardcontainer>
            <ImagenCard src={image}/>
            <Link to={`tours/${id}`} >
            <Title>{title}</Title>
            </Link>
        </Cardcontainer>
    )    
}

export default TourCard;

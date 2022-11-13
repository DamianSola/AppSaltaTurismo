import React from "react";
import { CardService, CardName } from "./StyleServiceCard";

export default function ServiceCard({title, image}){

    let backImage = {        
        backgroundImage: 'url(' + image + ')'}
    

    return(
        <CardService style={backImage}>
            <CardName>{title}</CardName>
        </CardService>
    )
}
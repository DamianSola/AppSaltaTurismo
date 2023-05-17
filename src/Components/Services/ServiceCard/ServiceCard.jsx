import React from "react";
import { CardService, CardName,Photo, Head, Data, Value, Key } from "./StyleServiceCard";

export default function ServiceCard({title, image, punctuation,Adress,webSite,phone, description}){

    console.log(description)

    return(
        <CardService>
            <Head>
                <div>
                    <Photo src={image}/>               
                </div>
            <CardName>{title}</CardName>
            </Head>
            <Data>
                {/* <Key>telefono: <Value>{phone}</Value></Key>
                <Key>sitio web:  <Value href={webSite} >{webSite}</Value></Key>
                <Key>direccion:  <Value>{Adress}</Value></Key>
                <Key>puntuacion:  <Value>{punctuation}</Value></Key> */}
                <p>{description}</p>
            </Data>
        </CardService>
    )
}
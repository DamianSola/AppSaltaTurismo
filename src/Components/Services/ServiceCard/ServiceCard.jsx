import React from "react";
import {CardService} from "./StyleServiceCard";

export default function ServiceCard({title, image, punctuation,Adress,webSite,phone, description}){

    // console.log(description)

    return(
        <CardService>
            <div className="head">
                <div className="title">
                <h4>{title}</h4>
                </div>
                <div className="logo">
                <img src={image}/>
                </div>
            </div>
            <div className="contain">
                <div className="data-contain">
                <p className="data">direccion:</p>
                <p className="data-value">{Adress}</p>
                </div>
                <div className="data-contain">
                <p className="data">sitio web:</p>
                <p className="data-value">{webSite}</p>
                </div>
                <div className="data-contain">
                <p className="data">telefono:</p>
                <p className="data-value">{phone}</p>
                </div>
                {/* <div className="data-contain">
                <p className="data"></p>
                <p className="data-value">{description}</p>
                </div> */}
            </div>
            
        </CardService>
    )
}

{/* <Head>
                <div>
                    <Photo src={image}/>               
                </div>
            <CardName>{title}</CardName>
            </Head>
            <Data>
                <Key>telefono: <Value>{phone}</Value></Key>
                <Key>sitio web:  <Value href={webSite} >{webSite}</Value></Key>
                <Key>direccion: </Key> <Value>{Adress}</Value>
                {/* <Key>puntuacion:  <Value>{punctuation}</Value></Key> */}
                {/* <p>{description}</p> */}
            // </Data> */}
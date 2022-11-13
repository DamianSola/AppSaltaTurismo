import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { ServiceContain, Title, OnlyService } from "./styleServices";

export default function Services(){

    const hardCodeService = [
        {title:"HOSPEDAJE", image:"https://www.estrategiaynegocios.net/binrepository/600x401/0c16/600d370/none/26086/QJKB/HOSPEDAJE.11_EN1388320_MG219542061.jpg"},
        {title:"GASTRONOMIA", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUpGwO8smTf_lW0he7r0WtnEdmGFVK8MbyFyDh6m0C7R3Oxxio4AlF30piXL0TPveSxk&usqp=CAU"},
        {title:"RECORRIDOS", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggUlMvim-QPWZqhOtb10FM-xxIwzu5DJi1A&usqp=CAU"},
        {title:"RENT CAR", image:"https://www.grupomybcr.com/wp-content/uploads/2016/06/rentacar.jpg"}
    ]


    return(
        <ServiceContain>
            <Title>Servicios</Title>
            <OnlyService>
                {hardCodeService && hardCodeService.map(e => {
                    return(
                        <ServiceCard title={e.title} image={e.image}/>
                        )
                    })}
            </OnlyService>
        </ServiceContain>
    )
}
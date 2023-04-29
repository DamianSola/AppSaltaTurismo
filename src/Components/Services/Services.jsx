import React,{useEffect} from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { ServiceContain, Title, OnlyService, Photo, ServicesTypes, Types, TypeName } from "./styleServices";
import {useDispatch, useSelector} from "react-redux"
import { getOneServiceType, AllServiceType} from "../../Redux/Actions/Index";
import {useParams} from "react-router-dom"

export default function Services(){

    const {id} = useParams()
    const {oneServiceType, allServiceTypes} = useSelector(s => s)
    // console.log(allServiceTypes)
    let {name, image, services} = oneServiceType

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneServiceType(id))
        dispatch(AllServiceType())
        // dispatch(deleteServiceType())
    }, [id])


    return(
        <ServiceContain>
             
            <Title><Photo src={image}/> {name && name.toUpperCase()}{services && <p>Hay {services.length} servicios</p>}</Title>
            <div>

            <ServicesTypes>
                {allServiceTypes && allServiceTypes.map(e => {
                    return <Types key={e.id} ><Photo src={e.image}/><TypeName to={`/service/${e.id}`} onChange={() => dispatch(getOneServiceType(e.id))}>{e.name.toUpperCase()}</TypeName>
                   </Types>
                })}
            </ServicesTypes>
            <OnlyService>
                {services && services.map((e,i) => {
                    return(
                        <ServiceCard key={i} 
                        title={e.name} 
                        image={e.images}
                        phone={e.phone}
                        Adress={e.Adress}
                        webSite={e.webSite}
                        punctuation={e.punctuation}
                        description={e.description}
                        />
                        )
                    })}
            </OnlyService>
            </div>

            {/* <Title>Ver tambien</Title> */}
        </ServiceContain>
    )
}
import React,{useEffect} from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { ServiceContain, Title, OnlyService, Photo, ServicesTypes, Types, TypeName } from "./styleServices";
import {useDispatch, useSelector} from "react-redux"
import { getOneServiceType, AllServiceType } from "../../Redux/Actions/Index";
import {useParams} from "react-router-dom"

export default function Services(){

    const {id} = useParams()
    const {oneServiceType, allServiceTypes} = useSelector(s => s)
    console.log(oneServiceType)
    let {name, image, services} = oneServiceType

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneServiceType(id))
        dispatch(AllServiceType())
    }, [])


    return(
        <ServiceContain>
            <Title><Photo src={image}/> {name && name.toUpperCase()}</Title>
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
                        />
                        )
                    })}
            </OnlyService>
            <Title>Ver tambien</Title>
            <ServicesTypes>
                {allServiceTypes && allServiceTypes.map(e => {
                    return <Types key={e.id} type><TypeName>{e.name.toUpperCase()}</TypeName><Photo src={image}/></Types>
                })}
            </ServicesTypes>
        </ServiceContain>
    )
}
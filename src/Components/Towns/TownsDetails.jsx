import React,{useEffect} from "react";
import { useParams } from "react-router";
import { DetailContain, Photos, Image, Description,Data, Text, Activities} from "./DetailStyled";
import {useDispatch , useSelector} from 'react-redux';
import { getOneTown } from "../../Redux/Actions/Index";
import ActivityCard from "../ActivitiesCard/ActivityCard";

const TownDetails = () => {
    let {id} = useParams();
    // console.log(id)
    let dispatch = useDispatch()

    let {OneTown} = useSelector(s => s)
    // console.log(OneTown)
    let {name, location, images, description , activities} = OneTown
    console.log(activities)

    useEffect(() => {
        dispatch(getOneTown(id))
    }, [])

    if(OneTown){

        return(
            <DetailContain>
        <h1>{name}</h1>
        <Photos>
            <Image src={images}/>
        </Photos>
        <Data>
            <Text>lugar: {location}</Text>
            <Description>{description}</Description>
        </Data>
        <h1>Actividades en {name}</h1>
        <Activities>
            {activities && activities.map(e => {
                return <ActivityCard image={e.images} title={e.name} key={e.id} likes={e.likes}/>
            })}
        </Activities>
        </DetailContain>
        )
    }
}

export default TownDetails;

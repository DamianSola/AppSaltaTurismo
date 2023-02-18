import React,{useEffect} from "react";
import { useParams } from "react-router";
import { DetailContain, Photos, Image, Description,Data, 
    Text, Activities,Title,ActiviTitle, 
    TownContainer} from "./DetailStyled";
import {useDispatch , useSelector} from 'react-redux';
import { getOneTown } from "../../Redux/Actions/Index";
import ActivityCard from "../ActivitiesCard/ActivityCard";

const TownDetails = () => {
    let {id} = useParams();
    let dispatch = useDispatch()

    let {OneTown} = useSelector(s => s)
    let {name, location, images, description , activities} = OneTown

    useEffect(() => {
        dispatch(getOneTown(id))
    }, [])

    if(name){

        return(
            <DetailContain>
                <TownContainer>
                    <Title>{name.toUpperCase()}</Title>
                    <Photos>
                        <Image src={images}/>
                    </Photos>
                    <Data>
                        <Text>Ubicacion: {location}</Text>
                        <Description>{description}</Description>
                    </Data>
                </TownContainer>
                <ActiviTitle>Actividades en {name}</ActiviTitle>
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

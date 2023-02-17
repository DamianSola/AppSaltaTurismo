import React from "react";
import { useEffect } from "react";
// import { ActivitiesContainer, OnlyActivities, Title } from "../Activities/StyleActivities";
import {TourContainer} from "./TourCarousel"
import {useDispatch, useSelector} from "react-redux"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";


const Tours = () => {

    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)
    // console.log(allTours)
    let someTours;
    if(allTours) someTours = allTours.slice(0,5)

    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch]) 

    return(
            <TourContainer>
                {someTours && someTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} id={e.id} image={e.image}/>
                })}
            </TourContainer>
    )
}

export default Tours;
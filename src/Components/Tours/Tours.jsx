import React from "react";
import { useEffect } from "react";
import { ActivitiesContainer, OnlyActivities, Title } from "../Activities/StyleActivities";
import {useDispatch, useSelector} from "react-redux"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";


const Tours = () => {

    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)
    console.log(allTours)
    // let tours = allTours.rows


    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch]) 

    return(
            <OnlyActivities>
                {allTours && allTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} image={e.image}/>
                })}
            </OnlyActivities>
    )
}

export default Tours;
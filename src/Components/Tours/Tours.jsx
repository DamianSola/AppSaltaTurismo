import React, {useRef} from "react";
import { useEffect } from "react";
// import { ActivitiesContainer, OnlyActivities, Title } from "../Activities/StyleActivities";
import {TourContainer} from "./TourCarousel"
import {useDispatch, useSelector} from "react-redux"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";


const Tours = () => {

    let containerRef = useRef(null)
    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)
    // console.log(allTours)
    let someTours;
    if(allTours) someTours = allTours.slice(0,8)

    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch]) 

    const handleNext = ()  => {
        // containerRef.scrollTo(25 , 0)
    }


    const handleBack = () => {
        // containerRef.scrollTo(25 , 0)

    }

    return(
        <div>
            {/* <button onClick={handleBack}>back</button>
            <button onClick={handleNext}>next</button> */}
            <TourContainer>
                {someTours && someTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} id={e.id} image={e.image}/>
                })}
            </TourContainer>
        </div>
    )
}

export default Tours;
import React from "react";
import { useEffect } from "react";
import { ActivitiesContainer, Title } from "../Activities/StyleActivities";
import {useDispatch, useSelector} from "react-redux"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";
import styled from "styled-components"

const Container = styled.div`
    display: block;
`
export const OnlyActivities = styled.div`
  display: flex; 
  justify-content: left;
  flex-wrap: wrap;
`


const OnlyTours = () => {

    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)
    // console.log(allTours)
    // let tours = allTours.rows


    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch])

    return(
        <Container>
            <h1>Todos los tours</h1>
            <OnlyActivities>
                {allTours && allTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} image={e.image}/>
                })}
            </OnlyActivities>
        </Container>
    )
}

export default OnlyTours;
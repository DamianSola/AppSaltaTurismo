import React from "react";
import { useEffect } from "react";
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
  margin: 2%;
`


const OnlyTours = () => {

    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)

    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch])

    return(
        <Container>
            <h1>Todos los recorridos</h1>
            <OnlyActivities>
                {allTours && allTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} id={e.id} image={e.image} description={e.description}/>
                })}
            </OnlyActivities>
        </Container>
    )
}

export default OnlyTours;
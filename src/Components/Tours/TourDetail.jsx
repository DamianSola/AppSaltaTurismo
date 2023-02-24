import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getOneTour } from "../../Redux/Actions/Index";
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 90%;
    margin: auto ;
    border: solid 1px;
    padding: 10px;
`
const Tilte = styled.h1`
    position: absolute;
    color: white;
    font-size: 40px;
    margin: auto;
    background-color: #7B0000;
    border: solid 0.5px black ;
    border-radius: 2px;
`
const Photos = styled.img`
    width: 600px;
    height: 400px;
`
const Text = styled.p`
    text-align: left;
    margin: 20px;
    font-size: 20px;
`


const TourDetail = () => {

    let {id} = useParams()
    let dispatch = useDispatch()
    let {oneTour} = useSelector(s => s)
    let {name, description, image} = oneTour;
    // console.log(oneTour)

    useEffect(() => {
        dispatch(getOneTour(id))
    }, [])

    return(
        <Container>
            <Tilte>{name}</Tilte>
            <Photos src={image}/>
            <Text>{description}</Text>
        </Container>
    )
}

export default TourDetail;

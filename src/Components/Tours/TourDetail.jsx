import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getOneTour } from "../../Redux/Actions/Index";



const TourDetail = () => {

    let {id} = useParams()
    let dispatch = useDispatch()
    let {oneTour} = useSelector(s => s)
    let {name, description, image} = oneTour;
    console.log(oneTour)

    useEffect(() => {
        dispatch(getOneTour(id))
    }, [])

    return(
        <div>
            <h1>{name}</h1>
            <img src={image}/>
            <h1>{description}</h1>
        </div>
    )
}

export default TourDetail;

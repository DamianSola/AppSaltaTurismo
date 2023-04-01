import React,{ useEffect } from "react";
import { ActivitiesContainer,Title, Photo, Description, Body } from "./StyleActivities";
import {useDispatch,useSelector} from 'react-redux'
import {getOneActivity} from "../../Redux/Actions/Index"
import { useParams } from "react-router";
import Slider from 'react-slick';


const Activities = () => {
    let {id} = useParams()

    const dispatch = useDispatch()
    const {oneActivity} = useSelector(state => state)
    let {likes,images,description,name,} = oneActivity;

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    useEffect(()=>{
        dispatch(getOneActivity(id))
    },[])

  
    return (
        <ActivitiesContainer>
            <Title>{name}</Title>
            <Body>
            <Slider {...settings} style={{ width: 800}}>
            {images && images.map((e,i) => {
                return <div key={i}>
                    <Photo src={e} style={{ width: "100%" }}/>
                </div> 
                })}
            </Slider>
            </Body>
            <Description>{description}</Description>
        </ActivitiesContainer>
    )
}

export default Activities


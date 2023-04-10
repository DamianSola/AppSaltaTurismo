import React, {useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useDispatch, useSelector} from "react-redux"
import {TourContainer, Carousel} from "./TourCarousel"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";


const Tours = () => {

  const dispatch = useDispatch()
  const {allTours} = useSelector(s => s)
  let someTours;
  if(allTours) someTours = allTours.slice(0,7)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch]) 


  return(         
    <TourContainer>
      <Carousel {...settings} >
        {someTours && someTours.map((e,i) => {
          return <TourCard 
            title={e.name} key={i} id={e.id} image={e.image} description={e.description}/>
        })}
      </Carousel>
    </TourContainer>
    )
}

export default Tours;


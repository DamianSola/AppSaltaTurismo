import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useDispatch, useSelector} from "react-redux"
// import { ActivitiesContainer, OnlyActivities, Title } from "../Activities/StyleActivities";
import {TourContainer} from "./TourCarousel"
import { getAllTours } from "../../Redux/Actions/Index";
import TourCard from "../ToursCard/TourCard";


const Tours = () => {

    const dispatch = useDispatch()
    const {allTours} = useSelector(s => s)
    let someTours;
    if(allTours) someTours = allTours.slice(0,12)

    const [defaultImage, setDefaultImage] = useState({});
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

  
//   const handleErrorImage = (data) => {
//       setDefaultImage((prev) => ({
//           ...prev,
//           [data.target.alt]: data.target.alt,
//           linkDefault: "https://static.vecteezy.com/system/resources/thumbnails/007/306/898/small/stylish-panoramic-background-silver-steel-metal-texture-vector.jpg",
//         }));
//     };
    
    useEffect(() => {
        dispatch(getAllTours())
    },[dispatch]) 


    return(         
            <TourContainer> 
                <Slider {...settings}>
                {someTours && someTours.map((e,i) => {
                    return <TourCard 
                    title={e.name} key={i} id={e.id} image={e.image}/>
                })}
                </Slider>
            </TourContainer>
    )
}

export default Tours;


import React from "react";
import { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/Index";
import CategoriesCard from "./CategoriesCard";
import { CategoriesC } from "./StyledCategories";
import {TourContainer, Carousel} from "./../Tours/TourCarousel"


const CategoriesHome = () => {

    const {allCategories} = useSelector(s => s)
    const dispatch = useDispatch()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
   

    useEffect(()=>{
        dispatch(getAllCategories())
    },[])

    return(
        <CategoriesC>
            <Carousel {...settings} >
            {allCategories && allCategories.map(e => {
                return <CategoriesCard name={e.name} id={e.id} image={e.image} key={e.id} description={e.description}/>
            })}
            </Carousel>
        </CategoriesC>
    )
}

export default CategoriesHome;

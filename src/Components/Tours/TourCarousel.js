import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TourContainer = styled.div`
    width: 90%;
    /* height: 350px; */
    margin: auto ;
    /* margin-bottom: 30px; */

`

export const Carousel = styled(Slider)`
    width: 98%;

    .slick-prev:before, .slick-next:before{
        color: black;
        font-size: 50px;
    
    }

    .slick-next {
        right: 20;
    }
     .slick-prev{
        position: absolute;
        left: 20
    }
`
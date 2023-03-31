import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TourContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    /* margin-bottom: 30px; */

    .back{
        color: red
    }

    button{
        color: green
    }

    .next{
        color:black
    }
`

export const Carousel = styled(Slider)`

    .slick-prev:before, .slick-next:before{
        color: black;
        size: 20px;
        /* width: 30px; */
    }
`
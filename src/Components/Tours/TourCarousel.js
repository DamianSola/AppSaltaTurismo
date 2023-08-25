import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TourContainer = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    margin: auto ;
    /* margin-bottom: 30px; */

`

export const Carousel = styled(Slider)`
    width: 90%;
    height: auto;
    justify-content: center;
    margin: auto;

    .slick-prev:before, .slick-next:before{
        color: black;
        font-size: 50px;
    
    }

    @media( (max-width: 768px)and( min-width: 500px)){
        .slick-prev:before, .slick-next:before{
            font-size: 20px;
        }
        .slick-next {
            right: 5%;
        }
        .slick-prev{
            position: absolute;
            left: -30px;
        }
    }

    @media (max-width: 500px){
        .slick-prev:before, .slick-next:before{
            display: none;
        }
    }

    .slick-next {
        right: 20;
    }
     .slick-prev{
        position: absolute;
        left: -50px;
    }
`
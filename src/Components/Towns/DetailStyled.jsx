import styled from 'styled-components'
import Slider from 'react-slick';


export const DetailContain = styled.div`
display: flex ;
flex-direction: column;
width: 95%;
margin: auto;
`

export const TownContainer = styled.div`
display: flex;
`
export const Title = styled.h1`
    font-size: 40px;
    margin: auto;
`
export const Photos = styled.div`
padding: 0 20px;
margin: auto;


`

export const Image = styled.img`
width: 100%;
`
export const Data = styled.div`
display: flex;
flex-direction: column;
/* width: 50%; */
`

export const Description = styled.p`
/* text-align: left; */
margin: 10px;
font-size: 15px;

`

export const Text  = styled.p`
text-align: left;
margin: 10px;
font-size: 20px;

`

export const ActiviTitle = styled.h1`
text-align: left;

`

export const Activities = styled.div`
text-align: left;
display: flex;
justify-content: left;
flex-wrap: wrap;
`
export const Carrousel = styled(Slider)`
    width: 600;
.slick-prev:before, .slick-next:before{
        color: black;
        size: 40px;
    }

    .slick-next {
        right: 10;

    }
     .slick-prev{
        left: -10
    }

    @media (max-width: 620px){
        width: 300px;
    }
`

export const Pics = styled.img`
    width: 50%;
    /* height: 400px; */
`
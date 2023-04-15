import React,{useEffect} from "react";
import { useParams } from "react-router";
import { DetailContain, Photos, Description,Data, 
    Text, Activities,Title,ActiviTitle, 
    TownContainer, Carrousel, Pics} from "./DetailStyled";
import {useDispatch , useSelector} from 'react-redux';
import { getOneTown } from "../../Redux/Actions/Index";
import styled from 'styled-components';
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

const ActivityCard = styled(Card)`
    margin: 20px;
    width: 250px;
    background-color: #2d2d2d;
    color: #ffff;
    /* box-shadow: 2px 2px 3px;  */
    padding: 10px 0;
    text-align: center;

    p{ margin: auto}

    .link{
        color: #ffff;
        text-decoration:none;
    }

    img{
    width: 100%; 
    }
`




const TownDetails = () => {
    let {id} = useParams();
    let dispatch = useDispatch()

    let {OneTown} = useSelector(s => s)
    let {name, location, images, description , activities} = OneTown;

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
        dispatch(getOneTown(id))
    }, [])

    if(name){

        return(
            <DetailContain>
                <TownContainer>
                     <Data>
                        <Title>{name.toUpperCase()}</Title>
                        <Text>Ubicacion: {location}</Text>
                        <Description>{description}</Description>
                    </Data>
                    <Photos>
                <Carrousel style={{ width: 650}}>
                    {images && images.map((e,i) => {
                    return <div key={i}>
                            <Pics src={e} style={{ width: "100%" }} alt="carousel"/>
                        </div> 
                })}
                </Carrousel>
                    </Photos>
                </TownContainer>
                <ActiviTitle>Actividades en {name}</ActiviTitle>
                <Activities>
            {activities && activities.map(e => {
                return <ActivityCard key={e.id}>
                    <p>{e.name}</p>
                    <img src={e.images} />
                    {/* <div className="body">
                    <p>{e.likes}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" color="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                    </div> */}
                    <Link className="link" exact to={`/sub-categories/activity/${e.id}`}>ver mas</Link>
                </ActivityCard>
            })}
            </Activities>
        </DetailContain>
        )
    }
}

export default TownDetails;

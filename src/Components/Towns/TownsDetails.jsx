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
                        <Photos>
                <Carrousel style={{ width: 800}}>
                    {images && images.map((e,i) => {
                    return <div key={i}>
                            <Pics src={e} style={{ width: "100%" }} alt="carousel"/>
                        </div> 
                })}
                </Carrousel>
                  </Photos>
                        <Text>Ubicacion: {location}</Text>
                        <Description>{description}</Description>
                    </Data>
                   
                </TownContainer>
                <ActiviTitle>Actividades en {name}</ActiviTitle>
                <Activities>
            {activities && activities.map(e => {
              return <ActivityCard key={e.id}>
                    <p>{e.name}</p>
                    <img src={e.images[0]} />
                    <Link className="link" exact to={`/sub-categories/activity/${e.id}`}>ver mas</Link>
                </ActivityCard>
            })}
            </Activities>
        </DetailContain>
        )
    }
}

export default TownDetails;

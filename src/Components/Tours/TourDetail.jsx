import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getOneTour } from "../../Redux/Actions/Index";
import styled from "styled-components";
import { Photos, Carrousel, Pics } from "../Towns/DetailStyled";
import ServiceCard from "../Services/ServiceCard/ServiceCard";

const Container = styled.div`
    display: block;
    width: 95%;
    margin: auto ;
    padding: 20px;

    img{
        width: 50%;
        height: fit-content;
        
    }

    .name{
        font-size: 30px;
    }
    .namee{
        text-align: left;
        /* margin: auto; */
    }
    .body{
        display: flex;
    }

    @media (max-width: 620px){
        .body{
            flex-direction: column;
        }
    }

    .description{
        padding: 10px;
    }
    .servi-title{
        text-align: left;
        margin: 10px 40px;
        font-size: 30px;
    }
    .services{
        width: 500px;
    }

`

const TourDetail = () => {

    let {id} = useParams()
    let dispatch = useDispatch()
    let {oneTour} = useSelector(s => s)
    let {name, description, image, services} = oneTour;

    useEffect(() => {
        dispatch(getOneTour(id))
    }, [])

    return(
        <Container>
            <div className="name">
            <p className="namee">{name}</p>
            </div>
            <div className="body">
            <Photos>
                <Carrousel >
                    {image && image.map((e,i) => {
                    return <div key={i}>
                            <Pics src={e} alt="carousel"/>
                        </div> 
                })}
                </Carrousel>
            </Photos>
            <p className="description">{description}</p>
            </div>
            <div className="servi-title">
                <h4>Servicios</h4>
            </div>
            <div className="services">
                {services && services.map(e => {
                    return <ServiceCard 
                        title= {e.name}
                        image= {e.images}
                        Adress= {e.Adress}
                        webSite= {e.webSite}
                        phone= {e.phone}
                    />}
                )}
            </div>
                
        </Container>
    )
}

export default TourDetail;

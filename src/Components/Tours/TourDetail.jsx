import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getOneTour } from "../../Redux/Actions/Index";
import styled from "styled-components";
import { Photos, Carrousel, Pics } from "../Towns/DetailStyled";

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

    .description{
        padding: 10px;
    }


`
// const Tilte = styled.h1`
//     position: absolute;
//     color: white;
//     font-size: 40px;
//     margin: auto;
//     background-color: #7B0000;
//     border: solid 0.5px black ;
//     border-radius: 2px;
// `
// const Photos = styled.img`
//     width: 600px;
//     height: 400px;
// `
// const Text = styled.p`
//     text-align: left;
//     margin: 20px;
//     font-size: 20px;
// `


const TourDetail = () => {

    let {id} = useParams()
    let dispatch = useDispatch()
    let {oneTour} = useSelector(s => s)
    let {name, description, image} = oneTour;

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
                <Carrousel style={{ width: 650}}>
                    {image && image.map((e,i) => {
                    return <div key={i}>
                            <Pics src={e} style={{ width: "100%" }} alt="carousel"/>
                        </div> 
                })}
                </Carrousel>
            </Photos>
            <p className="description">{description}</p>
            </div>
                
        </Container>
    )
}

export default TourDetail;

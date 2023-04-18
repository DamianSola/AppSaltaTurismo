import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AllServiceType } from "../../../Redux/Actions/Index";
import { Button, ButtonGroup, Card } from "reactstrap";
import { Link } from "react-router-dom";

const Container = styled.div`
    min-height: 24rem;
    display: block;
    .constrol{
        display: flex;
        margin: 10px auto;
    }
    .service_types{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px auto;
    }

    @media (max-width: 750px) {
        .service_types{
        display: flex;
        flex-wrap: wrap;
        /* justify-content: center; */
        margin: 10px auto;
        }
    }
`

const CardServType = styled.div`
    display: flex;
    width: 35%;
    margin: 10px;
    border: solid 1px grey;
    border-radius: 10px;
    .one{
        width: 40%;
    }
    .photo{
    border-radius: 10px;
    }
    .two{
        margin: auto;
    }
    .link{
        text-decoration: none;
        color: grey;
    }
    @media (max-width: 800px) {
        display: block;
        width: 70%;
        .one{
        width: 100%;
        text-align: center;
        }
    }
`

const AllServicesTypes = () => {


    const dispatch = useDispatch()
    const {allServiceTypes} = useSelector(s => s)
    // console.log(allServiceTypes)

    useEffect(() => {
        dispatch(AllServiceType())
    },[])

    return(
        <Container>
            <div className="control">
                <Button>agregar tipo de servicio</Button>
            </div>
            <div className="service_types">
                {allServiceTypes && allServiceTypes.length === 0 && <p>No hay resultados de tipos de servicios</p>}
                {allServiceTypes && allServiceTypes.map(e => {
                    return <CardServType>
                        <div className="one">
                            <img className="photo" src={e.image} alt="photo" width="100%"/>
                        </div>
                        <div className="two">
                            <p>{e.name}</p>
                            <p>{e.services.length} servicios</p>
                        <ButtonGroup>
                            <Button outline>cambios</Button>
                            <Button outline>borrar</Button>
                            <Button outline><Link className="link" exact to={`/service/${e.id}`}>detalles</Link></Button>
                        </ButtonGroup>
                        </div>
                    </CardServType>
                })}
            </div>

        </Container>
    )
}

export default AllServicesTypes;
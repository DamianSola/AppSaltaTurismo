import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AllServiceType } from "../../../Redux/Actions/Index";
import { Button, ButtonGroup, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { delteServiceType } from "../../../Redux/Actions/Admin";
import AddServiTypeModal from "../Forms/Create/AddServiType";
import { AutenticateRoutes, PageAuth } from "../Autenticate/Autenticate";


const Container = styled.div`
    min-height: 24rem;
    display: block;
    align-items: center;
    .constrol{
        display: flex;
        margin: 10px auto;
    }
    .service_types{
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        margin: 10px;
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

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {allServiceTypes} = useSelector(s => s)
    // console.log(allServiceTypes)

    const DeleteServiceType = (data) => {
        dispatch(delteServiceType(data)).then(res => alert(res))
    }

    useEffect(() => {
        dispatch(AllServiceType())
    },[])

    const ValidateRoute = AutenticateRoutes()

    if(!ValidateRoute){
        return <PageAuth/>
    }
    return(
        <Container>
            <div className="control">
                <Button onClick={() => setOpen(true)}>agregar tipo de servicio</Button>
            </div>
            <AddServiTypeModal open={open} close={() => setOpen(false)}/>
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
                            <Button onClick={() => DeleteServiceType(e.id)} outline>borrar</Button>
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
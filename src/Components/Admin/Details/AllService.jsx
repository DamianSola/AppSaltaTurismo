import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllService } from "../../../Redux/Actions/Index";
import { SearchService } from "../../Searchers/Search";

const Container = styled.div`
    display: block;

    .main{
        display: flex;
        padding: 20px;
    }

    .allServices{
        display: flex;
        flex-wrap: wrap;
    }

    .card{
        width: 24%;
        margin: 6px;
    }

    .name{
        margin: auto;
        font-size: 25px;
    }

    img{
        width: 100%;
    }

    .punct{
        margin: auto;
    }
    .addTown{
        /* border-style: none; */
        border: solid 0.5px;
        border-radius: 5px;
        background-color: #ffff;
        color: black;
        margin: 0 10px;
    }

    .button{
        border-style: none;
        background-color: #ffff;
        margin: 10px;
    }
`

const AllServices = () => {

    const dispatch = useDispatch()
    const {allServices} = useSelector(s => s)
    // console.log(allServices)

    useEffect(() => {
        dispatch(getAllService())
    },[dispatch])
 
    return (
        <Container>
            <div className="main">
                <button className="addTown">agregar servicio</button>
                <SearchService/>
            </div>
            <div className="allServices">
                {allServices && allServices.map((e,i) => {
                    return <div className="card" key={i}>
                        <p className="name">{e.name}</p>
                        <p className="punct">puntuacion: {e.punctuation}</p>
                        <img src={e.images[0]}/>
                        <div className="buttons">
                            <button className="button">cambios</button>
                            <button className="button">borrar</button>
                            <button className="button">detalles</button>
                        </div>
                    </div>
                })}
            </div>
            
        </Container>
    )

}

export default AllServices;

import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllService } from "../../../Redux/Actions/Index";
import { SearchService } from "../../Searchers/Search";
import { Button } from "reactstrap";
import { deleteWhatever } from "../../../Redux/Actions/Admin";
import AddService from "../Forms/Create/AddService";
import { useState } from "react";

const Container = styled.div`
    display: block;
    min-height: 24rem;

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
        /* background-color: #ffff; */
        margin: 10px;
    }
`

const AllServices = () => {

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {allServices} = useSelector(s => s)
    // console.log(allServices)

    const deleteService = (id) => {
        dispatch(deleteWhatever(id,"services")).then(res => alert(res))
    }

    useEffect(() => {
        dispatch(getAllService())
    },[dispatch])
 
    return (
        <Container>
            <div className="main">
                <button className="addTown" onClick={() => setOpen(true)}>agregar servicio</button>
                <SearchService/>
            </div>
            <AddService open={open} close={() => setOpen(false)}/>
            <div className="allServices">
                {allServices && allServices.map((e,i) => {
                    return <div className="card" key={i}>
                        <p className="name">{e.name}</p>
                        {/* <p className="punct">puntuacion: {e.punctuation}</p> */}
                        <img src={e.images}/>
                        <div className="buttons">
                            <Button className="button">cambios</Button>
                            <Button className="button" onClick={() => deleteService(e.id)}>borrar</Button>
                            <Button className="button">detalles</Button>
                        </div>
                    </div>
                })}
            </div>
            
        </Container>
    )

}

export default AllServices;

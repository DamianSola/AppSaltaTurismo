import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTowns } from "../../../Redux/Actions/Index";
import styled from "styled-components";
import { SearchTown } from "../../Searchers/Search";
import { Button } from "reactstrap";
import AddTown from "../Forms/Create/AddTown";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 1%;
    min-height: 24rem;

    .constrols{
        display: flex;
    }
    
    .allTowns{
        display: flex;
        flex-wrap: wrap;
        margin: auto;
    }

    .name{
        font-size: 20px;
    }

    .card{
        width: 30%;
        margin: 10px
    }

    .image{
        width: 95%;
        margin: auto;
    }

    .buttons{
        margin: auto;
        padding: 5px;
    }

    .button{
        margin: 10px;
        font-size: 20px;
        border-style: none;
        background-color: #ffff;
        color: black;
    }
    .see{
        margin: 10px;
        text-decoration: none;
        color: black;
        font-size: 20px;
    }

    .addTown{
        /* border-style: none; */
        border: solid 0.5px;
        border-radius: 5px;
        background-color: #ffff;
        color: black;
        margin: 10px;
        /* width: 150px; */
    }
`


const AllTowns = () => {

    let dispatch = useDispatch()
    let {allTowns} = useSelector(s => s)
    const [open, setOpen] = useState(false)

    const Close = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getAllTowns())
    },[dispatch])

    return(
        <Container>
            <div className="constrols">
                <SearchTown/>
                <Button onClick={() => setOpen(true)}>agregar pueblo</Button>
                <AddTown close={Close} open={open}/>
            </div>
            <div className="allTowns">
            {allTowns && allTowns.map((e,i) => {
                return <div className="card" key={i}>
                    <p className="name">{e.name}</p>
                    <img src={e.images[0]} className="town"/>
                    <div className="buttons">
                        <button className="button">cambios</button>
                        <button className="button">borrar</button>
                        <Link exact to={`/town/${e.id}`} className="see">detalles</Link>
                    </div>
                </div>
            })}
            </div>
        </Container>
    )

}

export default AllTowns;
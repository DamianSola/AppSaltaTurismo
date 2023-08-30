import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { getAllTowns } from "../../Redux/Actions/Index";
import {allTownContainer} from "./DetailStyled";


const AllTowns = () => {

    const dispatch = useDispatch()
    const alltowns = useSelector(s => s.allTowns)
    console.log(alltowns) 

    useEffect(()=> {
        dispatch(getAllTowns())
    }, [])
    return(
        <div>
            {alltowns && alltowns.map((e,i) => {
                return <allTownContainer>
                    <h1>{`${i+1}.`}</h1>
                    <img src={e.images[0]}/>
                    <h2>{e.title}</h2>
                    <p>{e.description}</p>
                    <Link to={`/town/${e.id}`}>ver mas</Link>
                </allTownContainer>
            })}
        </div>
    )
}

export default AllTowns;
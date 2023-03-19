import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { getAllTowns } from "../../Redux/Actions/Index";
import TownCard from "./TownCard";

// styled compnents

const Containtowns = styled.div`
display: flex;
/* width: auto; */

`
const NotTowns = styled.h2`
    
`


const Towns = () => {
    
    let dispatch = useDispatch()
    let {allTowns} = useSelector(s => s)
    // console.log(allTowns)
    // const Towns = allTowns.rows


    useEffect(() => {
        dispatch(getAllTowns())
    }, [])
    
    
    return(
        <Containtowns>
            {
                allTowns ? allTowns.map(e => {
                    return <TownCard
                    key={e.id}
                    name={e.name}
                    id={e.id}
                    image={e.images}
                    description={e.description}
                    />
                }):
                <NotTowns>
                    No hay ningun pueblo disponible
                </NotTowns>
                
                
            }
            
        </Containtowns>
    )
}

export default Towns;

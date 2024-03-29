import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { getAllTowns } from "../../Redux/Actions/Index";
import TownCard from "./TownCard";

// styled compnents

const Containtowns = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
/* width: auto; */
/* @media (max-width: 720px ) and (  min-width: 500px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 500px){
    grid-template-columns: repeat(1, 1fr);
} */
`
const NotTowns = styled.h2`
    
`


const Towns = () => {
    
    let dispatch = useDispatch()
    let {allTowns} = useSelector(s => s)
    let sliceTowns = allTowns && allTowns.slice(0,4)
    // console.log(allTowns)
    let prueba = undefined
    // const Towns = allTowns.rows

    let notTowns=[{id:0,name:"...", description:"...", image:["https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg"]},
    {id:1,name:"...", description:"...", image:["https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg"]},
    {id:2,name:"...", description:"...", image:["https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg"]},
    {id:3,name:"...", description:"...", image:["https://www.publicdomainpictures.net/pictures/280000/nahled/dusky-grey-sky-background.jpg"]}]


    useEffect(() => {
        dispatch(getAllTowns())
    }, [])

    while(!sliceTowns){
        return(
            <Containtowns>
                {
                    notTowns.map(e => {
                        return <TownCard
                            key={e.id}
                            name={e.name}
                            id={e.id}
                            image={e.image}
                            description={e.description}
                        />
                    })}
            </Containtowns>
        )
    }
    
    
    return(
        <Containtowns>
            {
                
                sliceTowns && sliceTowns.map(e => {
                    return <TownCard
                    key={e.id}
                    name={e.name}
                    id={e.id}
                    image={e.images}
                    description={e.description}
                    />
                })
            }
            
        </Containtowns>
    )
}

export default Towns;

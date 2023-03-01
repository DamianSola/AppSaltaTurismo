import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllActivities } from "../../../Redux/Actions/Index";
import { Likes } from "../../AllElements/StyledList";
// import { AllServiceType, getAllActivities, getAllCategories, getAllService, getAllSubCategories, getAllTours, getAllTowns } from "../../../Redux/Actions/Index"


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const Controls = styled.div`
    display: flex;
    margin: auto;
    padding: 2rem;
    justify-content: space-around;
` 
const ContainElements = styled.div`
    display: block;

`
const Elements = styled.div`
    display: flex;
    margin: 10px auto;
    border: solid 0.5px;
    width: 60%;
    justify-content: space-between;

`

const ButtonsEl = styled.div`
    display: flex;
    flex-direction: column;
   padding: 5px;
    
`
const Delete = styled.button`
    background-color: #7B0000;
    margin: auto;
    border-style: none;
    border-radius: 2px;
    padding: 5px;
    width: 100px;
    transition: 0.2s;

    :hover{
        color: white;
    }
`

const Put = styled.button`
    background-color: #00b2ec;
    border-style: none;
    border-radius: 2px;
    padding: 5px;
    width: 100px;
    margin: auto;
    transition: 0.2s;

    :hover{
        color: white;
        /* border: solid black; */
    }
`
const Agregar = styled.button`
    margin: auto;
    background-color:  #00b2ec;
    border-style:none;
    width: 80px;
    padding: 5px;
    transition: 0.2s;

    :hover{
        color: white;

    }
`

const Name = styled(Link)`
    text-decoration: none;
    margin: auto;
    font-size: 20px;
    color: black;
    transition: 0.5s;
    width: 100px;
    :hover{
    font-size: 25px;

    }
`
const Photo = styled.img`
    width: 150px;
`
const AllActivities = () => {

    // const [datos, setDatos] = useState

    let {allActivities} = useSelector(s => s)
    let dispatch = useDispatch()

    // const activities = new Promise(getAllActivities()).then(e =>  console.log(e.payload)).then(e => e)
    
    


    useEffect(() => {
        // console.log(datos)

    },[allActivities])

    return(
        <Container>
            <Controls>
                <Agregar>agregar</Agregar>
                <input type="search" placeholder="buscar actividad..."/>
                <button type="submit">buscar</button>
            </Controls>
            <ContainElements>
                {allActivities && allActivities.map(e => {
                    return <Elements key={e.id}>
                        <Photo src={e.images}/>
                        <Name>{e.name}</Name>
                        {/* <Likes>{e.likes}</Likes> */}
                    <ButtonsEl>
                        <Delete>BORRAR</Delete>
                        <Put>ACTUALIZAR</Put>
                    </ButtonsEl>
                </Elements>
                })}
                
            </ContainElements>
            
        </Container>
    )
}

export default AllActivities;

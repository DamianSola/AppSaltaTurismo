import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAllActivities } from "../../../Redux/Actions/Index";
import { Likes } from "../../AllElements/StyledList";
import ActivityFormPost from "../Forms/Create/ActivityForm";
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
   

`
const Elements = styled.div`
    display: block;
     /* width: 250px; */
    margin: 10px auto;
    border: solid 0.5px;
    width: 30%;
    /* justify-content: space-between; */

`

const ButtonsEl = styled.div`
    display: flex;
    /* flex-direction: column; */
   padding: 10px;

    
`
const Delete = styled.button`
    background-color: #7B0000;
    color: white;
    margin: auto;
    border-style: none;
    border-radius: 2px;
    padding: 5px;
    width: 100px;
    transition: 0.2s;
    border: solid 2px #7B0000;


    :hover{
       border: solid 2px  #00b2ec;
    }
`

const Put = styled.button`
    background-color: #00b2ec;
    border-style: none;
    color: white;
    border-radius: 2px;
    padding: 5px;
    width: 100px;
    margin: auto;
    transition: 0.2s;
    border: solid 2px  #00b2ec;


    :hover{
        border: solid 2px #7B0000;
        /* border: solid black; */
    }
`
const Agregar = styled.button`
    margin: auto;
    background-color:  #00b2ec;
    border-style:none;
    /* width: 80px; */
    width: 4rem;
    padding: 5px;
    transition: 0.2s;

    :hover{
        color: white;
        font-size: 15px;

    }
`

const SearchInput = styled.input`
    margin-left: 5px;
    padding: 5px;
`
const SearchButton = styled.button`
    background-color:  #00b2ec;
    transition: 50ms;
    margin-left: 5px;
    border-style: none;
    width: 4rem;
    :hover{
        color:white;
        font-size: 15px;
    }
`
const Name = styled(Link)`
    text-decoration: none;
    position: absolute;
    background-color:  #00b2ec;
    margin: auto;
    font-size: 20px;
    color: white;
    transition: 0.5s;
    width: 100px;
    /* max-height: 100px; */
    padding:10px;
    border: solid 2px  #00b2ec;


    :hover{
    color:#7B0000;
    border: solid 2px #7B0000;

    }
`
const Photo = styled.img`
    width: 100%;
`
const AllActivities = () => {

    const [addActivity, setAddActivity] = useState(false)

    let {allActivities} = useSelector(s => s)
    let dispatch = useDispatch()    

    const openModal = () => {
        setAddActivity(true)
    }
    
    const closeModal = () => {
        setAddActivity(false)
    }


    useEffect(() => {
        dispatch(getAllActivities())
      
    },[addActivity])

    return(
        <Container>
            <Controls>
                <Agregar onClick ={openModal}>agregar</Agregar>
                <SearchInput type="search" placeholder="buscar actividad..."/>
                <SearchButton type="submit">buscar</SearchButton>
            </Controls>
            {addActivity && <ActivityFormPost close={closeModal}/>}
            <ContainElements>
                {allActivities && allActivities.map(e => {
                    return <Elements key={e.id}>
                        <Name exact to= {`/sub-categories/activity/${e.id}`}>{e.name}</Name>
                        <Photo src={e.images}/>
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

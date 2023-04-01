import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteActivity } from "../../../Redux/Actions/Admin";
import { getAllActivities } from "../../../Redux/Actions/Index";
import ActivityFormPost from "../Forms/Create/ActivityForm";
import PutActivity from "../Forms/UpDates/putActivity";
import {SearchActivity} from "../../Searchers/Search";
import { Button } from "reactstrap";
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
    justify-content: center;
   

`
const Elements = styled.div`
    display: flex;
    margin: 5px ;
    border: solid 0.5px;
    width: 40%;
    height: 150px;
    border-radius: 10px;
    padding: 5px;
    /* background-color: #ECF0F1 ; */

`

const ButtonsEl = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    padding: 10px;

    button{
       background-color: #D0D3D4;
        margin: 5px;
        width: 100px;
        border-radius: 5px;
        transition: 0.2s;
    }

    .link{
        text-decoration: none;
        color: black;
        margin: 5px;
        width: 100px;
        border-radius: 5px;
        transition: 0.2s;
    }

    .link:hover{
        color: white;
        background-color: black;

    }

   
`
const Name = styled.div`
    display: flex;
    width: 80%;

    img{
        width: 50%;
        border-radius: 10px 0 0 10px;
    }

    div{
        display: block;
        margin: auto ;
    }
    .name{
        font-size: 20px;
    }

    .like{
        font-size: 15px;
    }
`

const AllActivities = () => {

    const [addActivity, setAddActivity] = useState(false)
    const [putActivity, setPutActivity] = useState(false)

    let {allActivities} = useSelector(s => s)
    let dispatch = useDispatch()    

    const openModal = () => {
        setAddActivity(true)
    }
    
    const closeModal = () => {
        setAddActivity(false)
        setPutActivity(false)
    }

    const destroyActivity = (id) => {
        dispatch(deleteActivity(id)).then(res => alert(res))
        dispatch(getAllActivities())
    }


    useEffect(() => {
        dispatch(getAllActivities())
      
    },[addActivity, dispatch])

    return(
        <Container>
            <Controls>
                <Button onClick ={openModal}>agregar +</Button>
                <SearchActivity/>
            </Controls>
            <ActivityFormPost close={closeModal} open={addActivity}/>
            <PutActivity close={closeModal} open={putActivity}/>
            <ContainElements>
                {allActivities && allActivities.map(e => {
                    return <Elements key={e.id}>
                        <Name>
                            <img src={e.images[0]} alt="activity"/>
                            <div className="details">
                            <p className="name">{e.name}</p>
                            <p>{e.subCategory && e.subCategory.name}</p>
                            <p className="like">Me gusta: {e.likes}</p>
                            </div>
                        </Name>
                    <ButtonsEl>
                        <Button onClick={() => setPutActivity(true)}>cambios</Button>
                        <Button onClick={() => destroyActivity(e.id)}>borrar</Button>
                        <Link className="link" exact to= {`/sub-categories/activity/${e.id}`}>ver mas</Link>
                    </ButtonsEl>
                </Elements>
                })}
                {!allActivities && <p>Sin resultados</p>}
            </ContainElements>
          
        </Container>
    )
}

export default AllActivities;

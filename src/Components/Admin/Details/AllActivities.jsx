import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteActivity } from "../../../Redux/Actions/Admin";
import { getAllActivities, getOneActivity } from "../../../Redux/Actions/Index";
import ActivityFormPost from "../Forms/Create/ActivityForm";
import PutActivity from "../Forms/UpDates/putActivity";
import {SearchActivity} from "../../Searchers/Search";
import { Button, Modal, Spinner } from "reactstrap";
import ActivityDelete from "../Forms/Delete/ActivityDelete";
// import { AllServiceType, getAllActivities, getAllCategories, getAllService, getAllSubCategories, getAllTours, getAllTowns } from "../../../Redux/Actions/Index"


const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 24rem;
`
const Controls = styled.div`
    display: flex;
    margin: 10px auto;
    /* padding: 2rem; */
    /* justify-content: space-around; */
` 
const ContainElements = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px auto;

`
const Elements = styled.div`
    display: flex;
    margin: 5px ;
    border: solid 0.5px;
    width: 550px;
    /* height: 100; */
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

    .image{
        width: 50%;
    }
    img{
        width: 100%;
        height: 90%;
        border-radius: 5px;
    }
    p{
        margin: 0 ; 
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
    const [activity, SetActivity] = useState("")
    const [warning, setWarning] = useState({open:false, id:""})



    let {allActivities} = useSelector(s => s)
    // console.log(allActivities)
    let dispatch = useDispatch()    

    const openModal = () => {
        setAddActivity(true)
    }
    
    const closeModal = () => {
        setAddActivity(false)
        setPutActivity(false)
    }

   const openPutModal = (id) => {
        SetActivity(id)
        dispatch(getOneActivity(id))
        console.log(activity)
        setPutActivity(true)
   }
    const destroyActivity = (id) => {
        dispatch(deleteActivity(id)).then(res => alert(res))
        // dispatch(getAllActivities())
    }


    useEffect(() => {
        dispatch(getAllActivities())
      
    },[dispatch, addActivity])

    return(
        <Container>
            <Controls>
                <SearchActivity/>
                <Button onClick ={openModal}>agregar</Button>
            </Controls>
            <ActivityFormPost close={closeModal} open={addActivity}/>
            <PutActivity close={closeModal} open={putActivity} activityId={activity}/>
            {/* <ActivityDelete close={setWarning({...warning, open: false})} open={warning} destroy={destroyActivity}/> */}
            <ContainElements>
                {allActivities && allActivities.map(e => {
                    return <Elements key={e.id}>
                        <Name>
                            <div className="image">
                            <img src={e.images[0]} alt="activity"/>
                            </div>
                            <div className="details">
                            <p className="name">{e.name}</p>
                            <p>{e.subCategory && e.subCategory.name}</p>
                            <p className="like">Me gusta: {e.likes}</p>
                            </div>
                        </Name>
                    <ButtonsEl>
                        <Button onClick={() => openPutModal(e.id)}>cambios</Button>
                        <Button onClick={() => destroyActivity(e.id)}>borrar</Button>
                        <Link className="link" exact to= {`/sub-categories/activity/${e.id}`}>ver mas</Link>
                    </ButtonsEl>
                </Elements>
                })}
                {!allActivities && <Spinner/>}
                {allActivities && allActivities.length === 0 && <p>No existe actividad</p>}
            </ContainElements>
          
        </Container>
    )
}

export default AllActivities;



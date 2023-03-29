import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteActivity } from "../../../Redux/Actions/Admin";
import { getAllActivities } from "../../../Redux/Actions/Index";
import { Likes } from "../../AllElements/StyledList";
import ActivityFormPost from "../Forms/Create/ActivityForm";
import PutActivity from "../Forms/UpDates/putActivity";
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
    background-color: #ECF0F1 ;

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

   .put:hover{
        background-color: blue;
        color: white;
    }

    .delete:hover{
        background-color: red;
        color: white;
    }
`

const Agregar = styled.button`
    margin: auto;
    padding: 5px;
    transition: 0.2s;

    :hover{
        color: white;
        background-color: blue;
    }
`

const SearchInput = styled.input`
    margin-left: 5px;
    padding: 5px;
`
const SearchButton = styled.button`
    /* margin: auto; */
    margin-left: 5px;
    padding: 5px;
    transition: 0.2s;
    
    :hover{
        background-color: #D0D3D4;
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
        // console.log(id)
        dispatch(deleteActivity(id)).then(res => alert(res))
    }


    useEffect(() => {
        dispatch(getAllActivities())
      
    },[addActivity, dispatch])

    return(
        <Container>
            <Controls>
                <Agregar onClick ={openModal}>agregar +</Agregar>
                <SearchInput type="search" placeholder="buscar actividad..."/>
                <SearchButton type="submit">buscar</SearchButton>
            </Controls>
            {addActivity && <ActivityFormPost close={closeModal} open={addActivity}/>}
            {putActivity && <PutActivity close={closeModal} open={addActivity}/>}
            <ContainElements>
                {allActivities && allActivities.map(e => {
                    return <Elements key={e.id}>
                        <Name>
                            <img src={e.images[0]}/>
                            <div className="details">
                            <p className="name">{e.name}</p>
                            <p>{e.subCategory && e.subCategory.name}</p>
                            <p className="like">Me gusta: {e.likes}</p>
                            </div>
                        </Name>
                    <ButtonsEl>
                        <button className="put" onClick={() => setPutActivity(true)}>cambios</button>
                        <button className="delete" onClick={() => destroyActivity(e.id)}>borrar</button>
                        <Link className="link" exact to= {`/sub-categories/activity/${e.id}`}>ver mas {'>'}</Link>
                    </ButtonsEl>
                </Elements>
                })}
                
            </ContainElements>
          
        </Container>
    )
}

export default AllActivities;

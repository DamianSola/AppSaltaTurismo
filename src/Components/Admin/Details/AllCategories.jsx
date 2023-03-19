import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCategories } from "../../../Redux/Actions/Index";
import AddCategoryModal from "../Forms/Create/AddCategory";

const Container = styled.div`
    display: block;
`
const Category = styled.div`
    display: flex;
    width: 40%;
    height: 100px;
    border: solid 0.5px black;
    border-radius: 10px;
    margin: 10px auto;
    padding:2px;
    background-color: #ECF0F1 ;
    /* background-color: #D0D3D4; */

`
const Body = styled.div`
    display: block;
    margin: auto;
    transition: 2s;

    p{
        font-size: 15px;
    }

    div{
        display: flex;
        justify-content: space-around;
    }

    button{
        border-style: none;
        background-color: #D0D3D4;
        padding: 5px;
        border: solid 1px;
        border-radius: 2px;
        size: 20px;
        margin: 5px
    }

    .delete:hover{
        border-color: red;
        color: white;
        background-color: red
    }

    .put:hover{
        color: white;
        background-color: blue;
        border-color: blue;
    }
  
`
const Name = styled.div`
    display: flex;
    text-align: center;
    width: 70%;
    

    img{
      border-radius: 10px 0  0 10px;
      width: 40%;
      height: 100%;
    }

    p{
        font-size: 20px;
        margin: auto;
    }

`
const NewCategory = styled.div`
    display: flex;
    width: 40%;
    height: 90px;
    border: solid 0.5px black;
    border-radius: 10px;
    margin: 10px auto;
    padding:2px;
    background-color: #ECF0F1 ;
    
    p{
        font-size: 25px;
        margin: auto;
    }

    button{
        border-style: none;
        padding: 5px;
        width: 40px;
        font-size: 30px;
        border: solid 1px black;
        border-radius: 5px;
        margin: auto;
        background-color: #D0D3D4;
        transition: 0.3s;
    }

    button:hover{
        color: white;
        background-color: blue;

    }

`


const AllCategories = () => {

    const [open, SetOpen] = useState(false)

    const {allCategories} = useSelector(s => s)
    console.log(allCategories)
    const dispatch = useDispatch()

    const openModal = () => {
        SetOpen(true)
    }

    const closeModal = () => {
        SetOpen(false)
    }

    useEffect(()=>{
        dispatch(getAllCategories())
    }, [])

    return(
        <Container>
            <NewCategory>
                <p>Crear nueva actividad</p>
                <button onClick={openModal}>+</button>
            </NewCategory>
            {open && <AddCategoryModal close={closeModal}/>} 
            {allCategories && allCategories.map((e,i) => {
                return <Category key={i}>
                    <Name>
                    <img src={e.image} alt="foto de la categoria"/>
                    <p>{e.name}</p>
                    </Name>
                    <Body>
                        <p>sub categorias: {e.subCategories.length}</p>
                        <div>
                            <button className="put">cambios</button>
                            <button className="delete">borrar</button>
                        </div>
                    </Body>
                </Category>
            })}
            
        </Container>
    )
}

export default AllCategories;

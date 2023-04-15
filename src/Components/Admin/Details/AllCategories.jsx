import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCategories } from "../../../Redux/Actions/Index";
import AddCategoryModal from "../Forms/Create/AddCategory";
import { Button } from "reactstrap";

const Container = styled.div`
    display: block;
    min-height: 24rem;
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



const AllCategories = () => {

    const [open, SetOpen] = useState(false)

    const {allCategories} = useSelector(s => s)
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
            <div>
                <Button onClick={openModal}>agregar Categoria</Button>
            </div>
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

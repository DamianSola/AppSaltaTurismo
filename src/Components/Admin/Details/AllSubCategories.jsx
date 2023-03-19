import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCategories, getAllSubCategories } from "../../../Redux/Actions/Index";
import { Link } from "react-router-dom";
import PutSubCategory from "../Forms/UpDates/putSubCategory";
import AddSubCategory from "../Forms/Create/AddSubCategory.";

 
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 95%;

`
const Category = styled.div`
    display: block;
    margin: 15px;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    width: 250px;
    min-height: 400px;
    background-color: #ECF0F1 ;


`
const NameCategory = styled.div`
    font-size: 20px;
    padding: 20px;
    background-color: #D0D3D4;
    border-radius: 8px 8px 0 0;
`

const ItemSc = styled.button`
    display: block;
    padding: 10px;
    transition: 0.5s;
    text-decoration: none;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    border-style: none;
    margin: auto;
    width: 100%;
    background-color:#ECF0F1 ;
    border-bottom: solid #D0D3D4 ;

&:hover{
    background-color: #D0D3D4;
}
`
const Add = styled.button`
    margin:2px;
    padding: 7px;
    border-style: none;
    color: white;
    /* background-color: #B22222; */
    background-color:#D0D3D4;
    font-size: 15px;
    border-radius: 5px;
    transition: 0.2s;


    &:hover{
    background-color: blue;
    color: white;
    }

` 


const AllSubCategories = () => {

    let [upDate, setUpDate] = useState(false)
    let [create, setCreate] = useState(false)
    let [param, setParam] = useState("")

    const CloseModal = () => {
        setUpDate(false)
        setCreate(false)
    }
    const openModal = (param) => {
        setUpDate(true)
        setParam(param)
    }

    let {allCategories, allSubCategories} = useSelector(s => s)
    // console.log(allSubCategories)
    let whithoutCategory =  allSubCategories && allSubCategories.rows.filter(e => e.categoryId === null)
    let dispatch = useDispatch() 

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllSubCategories())

    }, [])

    return(
        <div>
            <Container>
                {upDate && <PutSubCategory close={CloseModal} id={param}/>}
                {create && <AddSubCategory close={CloseModal} />}
                {allCategories && allCategories.map((e,i) => {
                    return <Category key={i}>
                        <NameCategory>{e.name}</NameCategory>
                        {e.subCategories && e.subCategories.map((s,i) => {
                            return <ItemSc key={i} onClick={() => openModal(e.id, 1)} >{s.name}</ItemSc>
                        })}
                        <Add onClick={() => setCreate(true)}>agragar +</Add>
                    </Category>
                  
                })}
                <Category>
                <NameCategory>Sin Categorias</NameCategory>
                {whithoutCategory && whithoutCategory.map(e => {
                    return <ItemSc key={e.id} onClick={() => openModal(e.id, 1)}>{e.name}</ItemSc>
                })}
                        
                </Category>
                
            </Container>
        </div>
    )
}

export default AllSubCategories;
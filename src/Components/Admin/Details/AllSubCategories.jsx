import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCategories, getAllSubCategories } from "../../../Redux/Actions/Index";
import PutSubCategory from "../Forms/UpDates/putSubCategory";
import AddSubCategory from "../Forms/Create/AddSubCategory.";
import {Button, ButtonGroup} from "reactstrap"
import { deleteWhatever } from "../../../Redux/Actions/Admin";

 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    min-height: 24rem;
    margin: auto;
    width: 95%;

`
const Category = styled.div`
    display: block;
    margin: 15px;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    width: 100%;
    /* min-height: 400px; */
    /* background-color: #ECF0F1 ; */
    img{
        width: 100%;
    }
    .card{
        display: flex;
        flex-direction: column;
        width: 200px;
        /* background-color: antiquewhite; */
        margin: 10px;
    }
    .center{
        display: block;
    }
    .name{
       font-size: 20px;
    }

`
const NameCategory = styled.div`
    font-size: 20px;
    padding: 20px;
    /* background-color: #D0D3D4; */
    border-radius: 8px 8px 0 0;
`

const ItemSc = styled(Button)`
  margin: auto;
  background-color: #ffff;
  color: black;
`
const Add = styled(Button)`

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

    const deleteSubCategory = (id) => {
        console.log(id)
        dispatch(deleteWhatever(id,"subcategories")).then(res => alert(res))
    }

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllSubCategories())

    }, [])

    return(
        <div>
                <Add onClick={() => setCreate(true)}>agragar +</Add>
            <Container>
                {upDate && <PutSubCategory close={CloseModal} id={param}/>}
                {create && <AddSubCategory close={CloseModal}/>}
                {allCategories && allCategories.map((e,i) => {
                    return <Category key={i}>
                        <NameCategory>{e.name}</NameCategory>
                        {e.subCategories && e.subCategories.map((s,i) => {
                            return <div className="card">
                                <img src={s.image}/>
                                <div className="center">
                                <p className="name">{s.name}</p>
                                </div>
                                <ButtonGroup>
                                <ItemSc key={i} onClick={() => openModal(s.id, 1)} >cambios</ItemSc>
                                <ItemSc onClick={() => deleteSubCategory(s.id)}>borrar</ItemSc>
                                </ButtonGroup>
                                </div>
                        })}
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
import React, { useEffect } from "react";
import {
    Button,
    Form,
    TextBox,
  } from 'react-form-elements'
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategories, getAllTowns } from "../../../../Redux/Actions/Index";
import { ContainerModal, CloseButton, ContainerForm, Forms, 
    Label,ModalContainer,Input, InputDescription, TitleForm } from "../Styled";


const ActivityFormPost = ({close}) => {
    

    const {allTowns ,allSubCategories} = useSelector(s => s)
    const dispatch = useDispatch()

    // console.log(allTowns)
    // console.log(allSubCategories)



    useEffect(()=>{
        dispatch(getAllSubCategories())
        dispatch(getAllTowns())
    },[dispatch])

    return(
       
        <ModalContainer isOpen={true}>
        <CloseButton onClick={close}>x</CloseButton>
       <ContainerForm>
        <TitleForm >Agragar una nueva actividad</TitleForm>
        <Forms >
            <Label>nombre:</Label>
                <Input type="text" name="name"/>
                {/* <div className="images">
            <Label>imagen 1:</Label>
                <Input type="file" multiple name="images"/>
            <Label>imagen 2:</Label>
                <Input type="file" multiple name="images"/>
            <Label>imagen 3:</Label>
                <Input type="file" multiple name="images"/>
                </div> */}
            <Label>Pueblo:</Label>
            <select>
                {allTowns && allTowns.map(e => {
                    return <option value={e.id}>{e.name}</option>
                })}
            </select>
            <Label>Sub categoria:</Label>
            <select>
                {allSubCategories && allSubCategories.rows.map(e => {
                    return <option value={e.id}>{e.name}</option>
                })}
            </select>
            <br/>      
            <Label >descripcion:</Label>
                <InputDescription  name="description" />
            <Input type="submit" value="agregar actividad" name="agregar"/>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default ActivityFormPost;
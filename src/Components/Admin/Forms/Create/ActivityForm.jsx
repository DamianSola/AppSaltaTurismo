import React, { useEffect, useState } from "react";
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
    
    const [input, setInput] = useState({})
    console.log(input)

    const {allTowns ,allSubCategories} = useSelector(s => s)
    const dispatch = useDispatch()

    const handleOnChange = (e) =>{
        let {name, value} = e.target;
        
        setInput({
            ...input,
            [name]: value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        alert(input)
        console.log(input)
    }
    const handleSelector = (e) => {
        let {name, value} = e.target;

        setInput({
            ...input,
            [name]: value
        })
        
    }

    const handleOnImages = (e) => {
        const {name, value} = e.target;
        // console.log(value)
        setInput({
            ...input,
            [name]: value
        })
    }

    useEffect(()=>{
        dispatch(getAllSubCategories())
        dispatch(getAllTowns())
    },[dispatch])

    return(
       
        <ModalContainer isOpen={true} className={"formCreateActivities"}  
        style={{
            overlay: {
              backgroundColor: '#000000aa'
            }}}>
        <CloseButton onClick={close}>x</CloseButton>
       <ContainerForm>
        <TitleForm >Agragar una nueva actividad</TitleForm>
        <Forms onSubmit={(e)=> handleOnSubmit(e)}>
            <div className="content">
        <div className="first">
            <Input type="text" placeholder="nombre de la actividad..." name="name" onChange={(e) => handleOnChange(e)} value={input.name}/>
            <br/>
            <br/> 
            <label className="label">Pueblo</label>
            <select name="town" onChange={(e) => handleSelector(e)} value={input.town}>
                {allTowns && allTowns.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <br/>
            <br/>
            <label className="label">Sub categoria</label>
            <select name="subCategory" onChange={(e) => handleSelector(e)} value={input.town}>
                {allSubCategories && allSubCategories.rows.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <br/>
            <br/>
            <label>imagenes</label>
            <Input type="file" name="images" id="images" onChange={(e) => handleOnImages(e)} 
            value={[input.images]} accept="image/png, image/jpg" multiple/>
            </div> 
            <div className="second">
            {/* <label className="label">descripcion:</label> */}
                <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleOnChange(e)} value={input.description}/>
            <Input type="submit" value="agregar actividad" name="agregar"/>
            </div>
            </div>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default ActivityFormPost;
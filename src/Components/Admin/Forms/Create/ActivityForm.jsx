import React, { useEffect, useState } from "react";
import {
    Button,
    Form,
    TextBox,
  } from 'react-form-elements'
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../../../Redux/Actions/Admin";
import { getAllSubCategories, getAllTowns } from "../../../../Redux/Actions/Index";
import { ContainerModal, CloseButton, ContainerForm, Forms, 
    Label,ModalContainer,Input, InputDescription, TitleForm } from "../Styled";


const ActivityFormPost = ({close, open}) => {

    // const [open, setOpen] = useS
    
    const [input, setInput] = useState({
        name:"", town:"", subcategory:"", images:[], description:""
    })

    const [error, setError] = useState({})

    const {allTowns ,allSubCategories} = useSelector(s => s)

    const dispatch = useDispatch()

    const validation = (input) => {
        let {name, town, subcategory, images, description} = input ;
        let error = {};

        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(town.length === 0) error.town = "debe elegir un pueblo";
        if(subcategory.length === 0) error.subcategory = "debe elegir una sub categoria";
        if(images === undefined) error.images = "agrega almenos una imagen";
        if(description.length < 100) error.description = "debe poner una descripcion de al menos 100 caracteres";

        return error;

    }
    

    const handleOnChange = (e) =>{
        let {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
        setError(validation({
            ...input,
            [name]:value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(error === {}){
            alert("hola")
        }else{
            close()
            dispatch(postActivity(input))
        }
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
            [name]: [value]
        })
    }


    useEffect(()=>{
        dispatch(getAllSubCategories())
        dispatch(getAllTowns())
        
    },[dispatch])

    return(
       
        <ModalContainer isOpen={open} className={"formCreateActivities"}  
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
            {error.name && <p className="errorText">{error.name}</p> }
            <Input type="text" placeholder="nombre de la actividad..." name="name" 
            onChange={(e) => handleOnChange(e)} value={input.name}/>
            <br/>
            <br/>
            {error.town && <p className="errorText">{error.town}</p> }
            <label className="label">Pueblo</label>
            <select name="town" onChange={(e) => handleSelector(e)} value={input.town}>
                {allTowns && allTowns.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <br/>
            <br/>
            {error.subcategory && <p className="errorText">{error.subcategory}</p> }
            <label className="label">Sub categoria</label>
            <select name="subcategory" onChange={(e) => handleSelector(e)} value={input.subcategory}>
                {allSubCategories && allSubCategories.rows.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <br/>
            <br/>
            {error.images && <p className="errorText">{error.images}</p>}
            <label>imagenes</label>
            <Input type="file" name="images" id="images" onChange={(e) => handleOnImages(e)} 
            value={[input.images]} accept="image/png, image/jpg" multiple/>
            </div> 
            <div className="second">
            {error.description && <p className="errorText">{error.description}</p> }
            <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleOnChange(e)} value={input.description}/>
            
            <input type="submit" value="agregar actividad" onClick={(e) => handleOnSubmit(e)}/>
            </div>
            </div>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default ActivityFormPost;
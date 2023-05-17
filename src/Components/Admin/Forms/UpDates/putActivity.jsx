import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../../../Redux/Actions/Admin";
import { getAllService, getAllSubCategories, getAllTowns, getOneActivity } from "../../../../Redux/Actions/Index";
import { CloseBut, ContainerForm, Forms,ModalContainer,Input, InputDescription, TitleForm, ItemsMini, ContItems } from "../Styled";
import ImageUploader from "../ImageUL/ImageUploader";


const putFormActivity = ({close, open, activityId}) => {

    const {allTowns ,allSubCategories, allServices, oneActivity} = useSelector(s => s)
    
    const [input, setInput] = useState({
        name:"", townId:"", subCategoryId:"", images:[], description:"", services:[]
    })
 
    console.log(oneActivity)

    const [inputServices, setInputService] = useState([]);

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
    }

    const handleSelector = (e) => {
        let {name, value} = e.target;

        setInput({
            ...input,
            [name]: value
        })
        
    }

    const handleSelectorService = e =>{
        let {name, value} = e.target;
        if(!input.services.includes(value)){
            setInput({
                ...input,
                [name]: [...input.services, value]
            })
            let newService = allServices.find(e => e.id === value)
            setInputService([...inputServices, newService])
        }
    }

    const deleteService = id => {
        let filt = input.services.filter(e => e !== id)
        let show = inputServices.filter(e => e.id !== id)
        setInput({
            ...input,
            services : filt
        })
        setInputService(show)
    }

    // console.log(activityId, "llllll")


    useEffect(()=>{
        dispatch(getAllSubCategories())
        dispatch(getAllTowns())
        dispatch(getAllService())
        activityId && dispatch(getOneActivity(activityId))
    },[dispatch])

    return(
       
        <ModalContainer isOpen={open} className={"formCreateActivities"}  
        style={{
            overlay: {
              backgroundColor: '#000000aa'
            }
        }
            // preventScroll= {true}
    }
            >
        <CloseBut onClick={close}/>
       <ContainerForm>
        <TitleForm >Agragar una nueva actividad</TitleForm>
        <p className="instuctions">no hace falta cambiar todo el formulario. Solo lo que quieres cambiar. Puedes elegir otra subcategoria, pueblo.
            los servicios e imagenes los puedes cambiar desde 0. (solo quedaran los que selecciones ahora o directamente no tocarlos)
        </p>
        <Forms onSubmit={(e)=> handleOnSubmit(e)}>
            <div className="content">
        <div className="first">
            <Input type="text" placeholder={oneActivity.name} name="name" 
            onChange={(e) => handleOnChange(e)} value={input.name}/>
            <label className="label">Pueblo</label>
            <select name="townId" onChange={(e) => handleSelector(e)} value={input.townId}>
            <option>-------</option>
                {allTowns && allTowns.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <label className="label">Sub categoria</label>
            <select name="subCategoryId" onChange={(e) => handleSelector(e)} value={input.subCategoryId}>
                <option>-------</option>
                {allSubCategories && allSubCategories.rows.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <label className="label">Servicio</label>
            <select name="services" onChange={(e) => handleSelectorService(e)} value={input.services}>
                <option>-------</option>
                {allServices && allServices.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <ContItems>
            {inputServices.length > 0 && inputServices.map(e => {
                return <ItemsMini><p>{e.name}</p><button onClick={() => deleteService(e.id)}>x</button></ItemsMini>
            })}
            </ContItems>
            <br/>
           
            </div> 
            <div className="second">
            <ImageUploader json={input} setJson={setInput}/>            {/* {error.description && <p className="errorText">{error.description}</p> } */}
            <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleOnChange(e)} value={input.description}/>
            </div>
            </div>
            <input type="submit" value="agregar actividad" onClick={(e) => handleOnSubmit(e)}/>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default putFormActivity;
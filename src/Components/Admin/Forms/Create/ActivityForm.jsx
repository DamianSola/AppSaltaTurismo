import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../../../Redux/Actions/Admin";
import { getAllService, getAllSubCategories, getAllTowns } from "../../../../Redux/Actions/Index";
import { CloseBut, ContainerForm, Forms,ModalContainer,Input, InputDescription, TitleForm, ItemsMini, ContItems } from "../Styled";
import ImageUploader from "../ImageUL/ImageUploader";


const ActivityFormPost = ({close, open}) => {

    // const [open, setOpen] = useS
    
    const [input, setInput] = useState({
        name:"", townId:"", subCategoryId:"", images:[], description:"", services:[]
    })

    const [error, setError] = useState({})
    const [inputServices, setInputService] = useState([]);


    const {allTowns ,allSubCategories, allServices} = useSelector(s => s)

    const dispatch = useDispatch()

    const validation = (input) => {
        let {name, townId, subCategoryId, images, description} = input ;
        let error = {};

        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(townId.length === 0) error.townId = "debe elegir un pueblo";
        if(subCategoryId.length === 0) error.subCategoryId = "debe elegir una sub categoria";
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
        // dispatch(postActivity(input))

        if(Object.values(error).length === 0){
            close()
            dispatch(postActivity(input))
        }else{
            alert("por favor completa los campos correctamente")
        }
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
        // console.log("----", input.services, "-----")
        let filt = input.services.filter(e => e !== id)
        let show = inputServices.filter(e => e.id !== id)
        setInput({
            ...input,
            services : filt
        })
        setInputService(show)
    }

    console.log(input.services)


    useEffect(()=>{
        dispatch(getAllSubCategories())
        dispatch(getAllTowns())
        dispatch(getAllService())
        
    },[dispatch])

    return(
       
        <ModalContainer isOpen={open} className={"formCreateActivities"}  
        style={{
            overlay: {
              backgroundColor: '#000000aa'
            }}}>
        <CloseBut onClick={close}/>
       <ContainerForm>
        <TitleForm >Agragar una nueva actividad</TitleForm>
        <Forms onSubmit={(e)=> handleOnSubmit(e)}>
            <div className="content">
        <div className="first">
            {error.name && <p className="errorText">{error.name}</p> }
            <Input type="text" placeholder="nombre de la actividad..." name="name" 
            onChange={(e) => handleOnChange(e)} value={input.name}/>
            <label className="label">Pueblo</label>
            {error.townId && <p className="errorText">{error.townId}</p> }
            <select name="townId" onChange={(e) => handleSelector(e)} value={input.townId}>
            <option>-------</option>
                {allTowns && allTowns.map(e => {
                    return <option key={e.id} value={e.id}>{e.name}</option>
                })}
            </select>
            <label className="label">Sub categoria</label>
            {error.subCategoryId && <p className="errorText">{error.subCategoryId}</p> }
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
            <br/>
            {/* <label>imagenes</label>
            <Input type="file" name="images" id="images" onChange={(e) => handleOnImages(e)} 
        value={[input.images]} accept="image/png, image/jpg" multiple/> */}
            </div> 
            <div className="second">
            {error.images && <p className="errorText">{error.images}</p>}
            <ImageUploader json={input} setJson={setInput}/>
            {error.description && <p className="errorText">{error.description}</p> }
            <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleOnChange(e)} value={input.description}/>
            </div>
            </div>
            <input type="submit" value="agregar actividad" onClick={(e) => handleOnSubmit(e)}/>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default ActivityFormPost;
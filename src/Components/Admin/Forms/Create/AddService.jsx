import React, { useEffect, useState } from "react";
import { CloseButton, Form, Input, Label, Modal } from "reactstrap";
import styled from "styled-components";
import UpLoaderOneImage from "../ImageUL/UpLoaderOneImage";
import { useDispatch, useSelector } from "react-redux";
import { AllServiceType } from "../../../../Redux/Actions/Index";
import { CloseBut } from "../Styled";
import { postService } from "../../../../Redux/Actions/Admin";

const Container = styled(Modal)`
   .form-container{
        width: 100%;
        padding: 10px;
    }
    .form{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /* background-color: red; */
        justify-content: space-around;
    }
    .error{
        color: red;
        font-size: 15px;
    }
    .description{
    }
`
const InputForm = styled(Input)`
    padding: 5px;
    margin: 0 10px;
`

const AddService = ({open,close}) => {

    const [input, setInput] = useState({
        name:"", 
        phone:"", 
        webSite:"", 
        Adress:"", 
        description:"", 
        open: false, 
        punctuation:"" , 
        images:"", 
        serviceTypeId:""
    })

    const [error, setError] = useState({})
    const dispatch = useDispatch()
    const {allServiceTypes} = useSelector(s => s)

    const validate = (input) => {
        let {name, 
            phone, 
            webSite, 
            Adress, 
            description, 
            open, 
            punctuation, 
            image, 
            serviceTypeId
        } = input;

        let error = {}; 

        if(name.length < 3) error.name =  "debe poner un nombre (minimo tres caracteres)";
        if(!/(?:\d{2}\s)(?:\d{4}\s)?\(?(\d{3})\)?-?\s?(\d{4})/.test(phone)) error.phone = "formato incorrecto";
        if(!/((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+)/.test(webSite)){
            error.webSite = "formato incorrecto"
        }
        if(punctuation > 5 || punctuation < 0) error.punctuation = "debe ser un numero entre 0 y 5"
        if(description.length < 50) error.description = "debe tener al menos 50 caracteres"
        if(Adress.length < 3) error.Adress = "escribe una direccion";
        if(serviceTypeId === undefined || serviceTypeId.length === 0) error.serviceTypeId = "elija un tipo de servicio";
        if(image === undefined) error.image = "agregar un imagen";
        return error
    } 

    const handleOnChange = (e) =>{
        let {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
        setError(validate({
            ...input,
            [name]:value
        }))
    }

    const handleSelector = (e) => {
        let {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
        
    }

    console.log(input)
    // console.log(error)


    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(Object.values(error).length === 0){
            close()
            dispatch(postService(input))
        }else{
            alert("por favor completa los campos correctamente")
        }
    }

    useEffect(() => {
        dispatch(AllServiceType())
    },[])

    return(
        <Container isOpen={open}>
            <CloseBut onClick={close}/>
            <div>
                <h4>Nuevo Servicio</h4>
            </div>
            <div className="form-container">
                <Form className="form" onSubmit={handleOnSubmit}>
                    <Label> nombre {error.name && <p className="error">{error.name}</p>}
                    <InputForm type="text"
                    name="name"
                    value={input.name}
                    onInput={(e) => handleOnChange(e)}
                    />
                    </Label>
                    <Label> telefono {error.phone && <p className="error">{error.phone}</p>}
                    <InputForm type="text" 
                    placeHolder="ej: 54 0387 0000000" 
                    maxLength="15"
                    name="phone"
                    value={input.phone}
                    onInput={(e) => handleOnChange(e)}
                    />
                    </Label>
                    <Label> sitio web {error.webSite && <p className="error">{error.webSite}</p>}
                    <InputForm
                    name="webSite"
                    value={input.webSite}
                    placeHolder="https:"
                    onInput={(e) => handleOnChange(e)}
                    />
                    </Label>
                    <Label> direccion {error.Adress && <p className="error">{error.Adress}</p>}
                    <InputForm type="text"
                     name="Adress"
                     value={input.Adress}
                     onInput={(e) => handleOnChange(e)}
                     />
                    </Label>
                    <Label>tipo de servicio 
                    <select name="serviceTypeId" onInput={(e) => handleSelector(e)} value={input.serviceTypeId}> 
                    {allServiceTypes && allServiceTypes.map(e => {
                        return <option key={e.id} value={e.id}>{e.name}</option>
                    })}
                    </select>
                    </Label>
                    <Label> descripcion {error.description && <p className="error">{error.description}</p>}
                    <InputForm
                    type="textarea"
                    className="description"
                    name="description"
                    value={input.description}
                    onInput={(e) => handleOnChange(e)}
                    />
                    <UpLoaderOneImage validate={validate} 
                    error={error} 
                    setError={setError} 
                    input={input} 
                    setInput={setInput}/>
                    </Label>
                    <br/>
                    <Label> habilitado
                    <InputForm
                    type="radio"
                    />
                    </Label>
                    <Label> puntaje {error.punctuation && <p className="error">{error.punctuation}</p>}
                    <InputForm
                    type="number"
                    name="punctuation"
                    value={input.punctuation}
                    onInput={(e) => handleOnChange(e)}
                    max="5"
                    />
                    </Label>
                    <Input type="submit" value="agregar servicio"/>
                    
                </Form>
            </div>
        </Container>
    )
}

export default AddService;
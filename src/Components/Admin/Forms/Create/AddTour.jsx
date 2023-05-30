import React, {useState, useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, CloseButton, Form, Input, Label } from "reactstrap";
import styled from "styled-components";
import { postTour } from "../../../../Redux/Actions/Admin";
import ImageUploader from "./../ImageUL/ImageUploader"
import { getAllService, getTourServices } from "../../../../Redux/Actions/Index";



const ContainerForm = styled.div`
    margin:10px;
    padding:10px;
`
const Close = styled(CloseButton)`
    position: relative;
    left: 95%;
    right: 0%;
`
const Error = styled.p`
    color: #f74848;
    font-size: 12px;
`

const AddTour = ({open, close}) => {
    const [input, setInput] = useState({
        name:"", images:[], description:"", serviceTypeId: ""
    })
    const [error, setError] = useState({})

    const dispatch = useDispatch()
    const {allServices} = useSelector(s => s)
    // const tourService = allServices && allServices.filter(e => e.serviceTypeId === 15)
    
    console.log(allServices)

    const validation = (input) => {
        let {name, images, description, location} = input ;
        let error = {};
        
        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(images === undefined) error.images = "agrega al menos una imagen";
        if(description.length < 100) error.description = "debe poner una descripcion de al menos 100 caracteres";

        return error;

    }

    const handleOnInput = (e) =>{
        e.preventDefault()
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
        if(Object.values(error).length === 0){
            close()
            dispatch(postTour(input))
            // .then(res => alert(res))
        }else{
           alert("por favor, completa el campo correctamente")
        }
    }

    const handleSelector = (e) => {
        let {name, value} = e.target;

        setInput({
            ...input,
            [name]: value
        })
    }
    // console.log(input)

    useEffect(() => {
        dispatch(getAllService())
    }, [input])


    return(
        <Modal isOpen={open}>
            <Close onClick={close}/>
            <ContainerForm>
                <h3>Agregar tour.</h3>
                <Form>
                <Label>Nombre</Label>
                {error.name && <Error className="errorText">{error.name}</Error> }
                <Input
                name="name"
                type="text"
                value={input.name}
                onInput={handleOnInput}
                />
                <ImageUploader json={input} setJson={setInput} />
                <Label>Descripcion</Label>
                {error.description && <Error>{error.description}</Error>}
                <Input 
                name="description"
                type="textarea"
                value={input.description}
                onInput={handleOnInput}
                />
                <Label>servicio</Label>
                <select name="serviceTypeId"  onChange={(e) => handleSelector(e)} value={input.serviceTypeId}>
                    {allServices && allServices.map(e => {
                        return <option key={e.id} value={e.id}>{e.name}</option>
                    })}
                </select>
                <br/>
                <Input
                type="submit"
                value="agregar"
                onClick={(e) => handleOnSubmit(e)}
                />
                </Form>
            </ContainerForm>
        </Modal>
    )
}

export default AddTour;
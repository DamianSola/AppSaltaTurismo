import React, {useState, useEffect}from "react";
import { useDispatch } from "react-redux";
import { Modal, CloseButton, Form, Input, Label } from "reactstrap";
import styled from "styled-components";
import { postTown } from "../../../../Redux/Actions/Admin";
import ImageUploader from "./../ImageUL/ImageUploader"



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


const AddTown = ({open, close}) => {
    const [input, setInput] = useState({
        name:"", location:"", images:[], description:""
    })
    const [error, setError] = useState({})
    

    // const [images, setImages] = useState([])

    const dispatch = useDispatch()

    const validation = (input) => {
        let {name, images, description, location} = input ;
        let error = {};
        
        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(images === undefined) error.images = "agrega almenos una imagen";
        if(location.length < 5) error.location = "debe poner la localidad del pueblo";
        if(description.length < 100) error.description = "debe poner una descripcion de al menos 100 caracteres";

        return error;

    }

    const handleOnInput = (e) =>{
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
            dispatch(postTown(input))
            // .then(res => alert(res))
        }else{
           alert("por favor, completa el campo correctamente")
        }
    }

    useEffect(() => {}, [input])

    return(
        <Modal isOpen={open}>
            <Close onClick={close} />
            <ContainerForm>
            <h3>Agregar pueblo</h3>
            <Form onSubmit={handleOnSubmit}>
                <Label>Nombre</Label>
                {error.name && <Error className="errorText">{error.name}</Error> }
                <Input
                name="name"
                type="text"
                value={input.name}
                onInput={handleOnInput}
                />
                <Label>Lugar</Label>
                {error.location && <Error className="errorText">{error.location}</Error> }
                <Input
                name="location"
                type="text"
                value={input.location}
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

export default AddTown;


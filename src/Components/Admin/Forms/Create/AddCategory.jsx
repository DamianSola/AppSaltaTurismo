import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal, CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import styled from "styled-components";
import UpLoaderOneImage from "./../ImageUL/UpLoaderOneImage";
import { useDispatch } from "react-redux";
import { postCategory } from "../../../../Redux/Actions/Admin";
import {InputDescription} from "../Styled"



const ContainerForm = styled.div`
    margin:10px;
    padding:10px;
`
const Error = styled.p`
    color: red;
`
const Close = styled(CloseButton)`
    position: relative;
    left: 95%;
    right: 0%;
`

const AddCategoryModal = ({close}) => {
    const [input, setInput] = useState({name:"", image:'', description: ''})
    const [error, setError] = useState({})

    const dispatch = useDispatch()

    const validate = (input) => {
        let {image, name} = input;
        let error = {};
        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(image === '') error.image = "agrega una imagen";
        return error;
    }

    const handleInput = e => {
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


    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(Object.values(error).length === 0){
            close()
            dispatch(postCategory(input))
        }else{
            alert("por favor completa los campos correctamente")
        }
    }

    // console.log(error)

    useEffect(()=>{

    }, [input])

    return(
        <Modal isOpen={true}>
            <ContainerForm>
            <Close onClick={close}/>
            <h3>Nueva categoria</h3>
            <Form onSubmit={() => {}}>
                <Label>nombre: {error.name && <Error className="error">{error.name}</Error>}</Label>
                <Input type="text" name="name" value={input.name} onInput={e => handleInput(e)}/>
                <Label>imagen:  {error.image && <Error className="error">{error.image}</Error>}</Label>
                    <UpLoaderOneImage
                        input={input}
                        setInput={setInput}
                        setError={setError}
                        validate={validate}
                    />
                <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleInput(e)} value={input.description}/>
                <br/>
                <Input type="submit" value='agregar' onClick={handleOnSubmit}/>
            </Form>
            </ContainerForm>
        </Modal>
    )
}

export default AddCategoryModal;

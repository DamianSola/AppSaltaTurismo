import React from "react"
import {useState, useEffect} from "react";
import { CloseBut, InputDescription, TitleForm } from "../Styled";
import { Modal, Form, Input, Label, } from "reactstrap";
import styled from "styled-components";
import UpLoaderOneImage from "../ImageUL/UpLoaderOneImage";
import { useDispatch, useSelector } from "react-redux";
import { postWhatever } from "../../../../Redux/Actions/Admin";
import { getAllCategories } from "../../../../Redux/Actions/Index";

const Container = styled(Modal)`
    display: block;
    padding: 10px;

    .form-container{
        margin: auto;
    }
`
const Error = styled.p`
    color: red;
`

const AddSubCategory = ({close}) => {

    const [input, setInput] = useState({name:"", image:'', categoryId: "", description:""})
    const [error, setError] = useState({})

    const dispatch = useDispatch()
    const {allCategories} = useSelector(s => s)
    // console.log(input)

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
            dispatch(postWhatever(input,"subcategories"))
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

    // console.log(input)

    useEffect(()=>{
        dispatch(getAllCategories())
    }, [])

    return(
        <Container isOpen={true}>
            <CloseBut onClick={close}/>
            <TitleForm>Nueva sub categoria</TitleForm>
            <div className="form-container">
                <Form onSubmit={handleOnSubmit}>
                    <Label>nombre: {error.name && <Error className="error">{error.name}</Error>}</Label>
                    <Input type="text" name="name" value={input.name} onInput={e => handleInput(e)}/>
                    <Label>imagen:  {error.image && <Error className="error">{error.image}</Error>}</Label>
                    <UpLoaderOneImage
                    input={input}
                    setInput={setInput}
                    setError={setError}
                    validate={validate}/>
                    <Label>tipo de servicio 
                    <select name="categoryId" onInput={(e) => handleSelector(e)} value={input.categoryId}> 
                    {allCategories && allCategories.map(e => {
                        return <option key={e.id} value={e.id}>{e.name}</option>
                    })}
                    </select>
                    </Label>
                    <InputDescription placeholder="descripcion..." name="description" onChange={(e) => handleInput(e)} value={input.description}/>

                    <Input type="submit" value='agregar' />
                </Form>
                <br/>
            </div>
        </Container>
    )
}

export default AddSubCategory;

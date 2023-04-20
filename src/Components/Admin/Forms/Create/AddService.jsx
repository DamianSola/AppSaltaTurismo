import React, { useState } from "react";
import { Form, Input, Label, Modal } from "reactstrap";
import styled from "styled-components";
import UpLoaderOneImage from "../ImageUL/UpLoaderOneImage";

const Container = styled(Modal)`
   .form-container{
        width: 100%;
        padding: 10px;
        
    }
    .form{
        display: flex;
        flex-wrap: wrap;
        /* background-color: red; */
        justify-content: space-around;
    }
    .description{
    }
`
const InputForm = styled(Input)`
    padding: 5px;
    margin: 0 10px;
`

const AddService = () => {

    const [input, setInput] = useState({})
    const [error, setError] = useState({})
    const validate = () => {} 

    return(
        <Container isOpen={true}>
            <div>
                <h4>Nuevo Servicio</h4>
            </div>
            <div className="form-container">
                <Form className="form">
                    <Label> nombre
                    <InputForm type="text"/>
                    </Label>
                    <Label> telefono
                    <InputForm type="phone"/>
                    </Label>
                    <Label> sitio web
                    <InputForm/>
                    </Label>
                    <Label> direccion
                    <InputForm type="text"/>
                    </Label>

                    <Label> descripcion
                    <InputForm
                    type="textarea"
                    className="description"
                    />
                    <UpLoaderOneImage validate={validate} 
                    error={error} 
                    setError={setError} 
                    input={input} 
                    setInput={setInput}/>
                    </Label>
                    <br/>
                    {/* <Label> habilitado
                    <InputForm
                    type="radio"
                    />
                    </Label> */}
                    <Input type="submit" value="agregar servicio"/>
                    
                </Form>
            </div>
        </Container>
    )
}

export default AddService;
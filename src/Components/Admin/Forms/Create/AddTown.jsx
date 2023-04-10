import React, {useState, useEffect}from "react";
import { useDispatch } from "react-redux";
import { Modal, CloseButton, Form, Input, Label } from "reactstrap";
import styled from "styled-components";
import { postTown } from "../../../../Redux/Actions/Admin";


const ContainerForm = styled.div`
    margin:10px;
    padding:10px;
`
const Close = styled(CloseButton)`
    position: relative;
    left: 95%;
    right: 0%;
`


const AddTown = ({open, close}) => {
    const [input, setInput] = useState({
        name:"", town:"", subcategory:"", images:[], description:""
    })

const [images, setImages] = useState([])

    const dispatch = useDispatch()

    const handleOnChange = (e) =>{
        let {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
        // setError(validation({
        //     ...input,
        //     [name]:value
        // }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // if(error === {}){
        //     // alert("hola")
        // }else{
        //     close()
        //     dispatch(postTown(input))
        // }
    }

    const handleOnImages = (e) => {
        const {name, value} = e.target;
        // setImages([...images, value])

        setInput({
            ...input,
            [name]: [value]
        })
    }
    
    // console.log(input)

    useEffect(() => {}, [input])

    return(
        <Modal isOpen={open}>
            <Close onClick={close} />
            <ContainerForm>
            <h3>Agregar pueblo</h3>
            <Form>
                <Label>Nombre</Label>
                <Input
                name="name"
                type="text"
                value={input.name}
                onChange={handleOnChange}
                />
                <Label>Lugar</Label>
                <Input
                name="location"
                type="text"
                value={input.location}
                onChange={handleOnChange}
                />
                <Label>Imagenes</Label>
                <Input
                name="images"
                type="file"
                accept="image/*"
                multiple="true"
                value={[input.images]}
                onChange={handleOnImages}
                />
                {/* {images && <img src={images} width="50px" alt="foto"/>} */}
                <Label>Descripcion</Label>
                <Input 
                name="description"
                type="textarea"
                value={input.description}
                onChange={handleOnChange}
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


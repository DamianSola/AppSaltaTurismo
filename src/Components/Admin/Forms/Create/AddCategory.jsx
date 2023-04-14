import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Modal, CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import styled from "styled-components";
import UpLoaderOneImage from "./../ImageUL/UpLoaderOneImage";



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
const ShowImage = styled.div`
    margin: 2px;
    text-align: center;
    min-height: 60px;
    border: solid 1px grey ;
    border-radius: 10px;
    border-style: dotted;
    
    img{
        width: 95%;
        border-radius: 10px;
    }
    .closeButton{
        background-color: #ffffffa2;
        position: absolute;
    }
`

const AddCategoryModal = ({close}) => {
    const [input, setInput] = useState({name:"", image:''})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const validate = (input) => {
        let {image, name} = input;
        let error = {};
        if(name.length < 3) error.name = "debe poner un nombre (minimo tres caracteres)";
        if(image === undefined) error.images = "agrega una imagen";
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

    const handleImage = async (e) => { 
        e.preventDefault()
       const file = e.target.files;
       const {name} = e.target;
       const formData = new FormData();
       setLoading(true)
        formData.append('file', file[0]);
        formData.append('upload_preset', 'dhalbnfi');
        const res = await axios.post('https://api.cloudinary.com/v1_1/daau4qgbu/image/upload', formData);
        // console.log(res.data.secure_url)
        setImage(res.data.url)
        setLoading(false)
        // console.log(image)
        // setInput({
        //     ...input,
        //     [name]: res.data.secure_url
        // })
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
           setInput({
            ...input,
            image: image
        })
        if(Object.values(error).length === 0){
            // close()
        }else{
            alert("por favor completa los campos correctamente")
        }
    }

    // console.log(input)

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
                <ShowImage>
                    {loading && <Spinner>Loading...</Spinner>}
                    {image && <CloseButton className="closeButton" onClick={() => setImage('')} />}
                    {image && <img src={image}/>}
                    </ShowImage>
                <Input 
                    type="file" 
                    accept="image/png, image/jpg" 
                    name="image"
                    id='file'  
                    value={input.image} 
                    onChange={handleImage}/>
                <br/>
                <Input type="submit" value='agregar' onClick={handleOnSubmit}/>
            </Form>
            </ContainerForm>
        </Modal>
    )
}

export default AddCategoryModal;

import React,  { useEffect, useState } from "react";
import styled from "styled-components";
import {CloseButton, Form, Input, Label, Spinner } from "reactstrap";
import axios from "axios";


const ShowImage = styled.div`
    margin: auto;
    text-align: center;
    
    img{
        width: 85%;
        /* max-height: 50px; */
    }
    .closeButton{
        background-color: #ffffffa2;
        position: absolute;
    }
`

const ContainerUpLoad =  styled.div`
    
`

const UpLoaderOneImage = ({input,setInput,setError,validate}) => {

    const [loading, setLoading] = useState(false)

    const handleImage = async (e) => { 
        e.preventDefault()
       const file = e.target.files;
       const formData = new FormData();
       setLoading(true);
        formData.append('file', file[0]);
        formData.append('upload_preset', 'dhalbnfi');
        const res = await axios.post('https://api.cloudinary.com/v1_1/daau4qgbu/image/upload', formData);
        setLoading(false)
        setInput({
            ...input,
            image: res.data.url
        })
        setError(validate({
            ...input,
            image: res.data.url
        }))
        
    }

    const removeImage = () => {
        setInput({...input, image:""})
        setError(validate({
            ...input,
            image: ""
        }))
    }
    
    return(
        <ContainerUpLoad>
            <ShowImage>
                    {loading && <Spinner>Loading...</Spinner>}
                    {input.image && <CloseButton className="closeButton" onClick={removeImage} />}
                    {input.image && <img src={input.image}/>}
                    </ShowImage>
                <Input 
                    type="file" 
                    accept="image/*" 
                    name="image"
                    id='file'  
                    onChange={handleImage}/>
        </ContainerUpLoad>
    )
}

export default UpLoaderOneImage;
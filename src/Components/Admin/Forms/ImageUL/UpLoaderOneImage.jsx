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

const UpLoaderOneImage = () => {

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)


    const handleImage = async (e) => { 
        e.preventDefault()
       const file = e.target.files;
       const {name} = e.target;
       const formData = new FormData();
       setLoading(true)
        formData.append('file', file[0]);
        formData.append('upload_preset', 'dhalbnfi');
        const res = await axios.post('https://api.cloudinary.com/v1_1/daau4qgbu/image/upload', formData);
        console.log(res.data.secure_url)
        setImage(res.data.secure_url)
        setLoading(false)
        // console.log(image)
        // setInput({
        //     ...input,
        //     [name]: image
        // }) 
    }
    
    return(
        <ContainerUpLoad>
            <Input 
                    type="file" 
                    accept="image/png, image/jpg" 
                    name="image"
                    id='file'  
                    value={image} 
                    onChange={handleImage}/>
                    <ShowImage>
                    {loading && <Spinner>Loading...</Spinner>}
                    {image && <CloseButton className="closeButton" onClick={() => setImage('')} />}
                    {image && <img src={image}/>}
                    </ShowImage>
        </ContainerUpLoad>
    )
}

export default UpLoaderOneImage;
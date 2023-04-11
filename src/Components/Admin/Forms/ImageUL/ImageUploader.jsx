import React, { useState } from "react";
import axios from 'axios';
import { BiImageAdd } from 'react-icons/bi';
// import './ImagesUploader.scss'
import styled from "styled-components";

const Image_UL = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: transparent;
    position: relative;
    margin: 15px 0;

.card-previewer {
    height: 65%;
    width: 100%;
    display: flex;
    border: 2px dashed #87868A;
    border-radius: 4px;
}

.card-footer {
    width: 100%;
    text-align: center;
    font-size: 15px;
    color: #87868a;
    padding: 5px;
    border: 2px solid #87868a;
    border-radius: 5px;
    transition: 0.5s ease;

    &:hover {
        cursor: pointer;
        border: 2px solid #87868a;
        color: #fff;
        background: #87868a;
    }
}

.img-view-container {
    position: relative;
    height: 100%;
    width: (40rem/3);
    padding: 0.25rem;
}

.img-view {
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 4px;
}

.img-front-film {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: (40rem/3) - 0.6rem;
    height: (20rem*0.65) - 0.7rem;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d2d2d6;
    border-radius: 4px;
    transition: 0.5s ease;

    &:hover {
        background: rgba(0, 0, 0, 0);
        color: transparent;
    }
}

.onclose-btn {
    position: absolute;
    top: 5px;
    right: 5px;
    background: transparent;
    border: none;
    color: #d2d2d6;
}

.img-uploader {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    visibility: hidden;
}

.progress-bar-active {
    display: block;
    height: 8px;
    width: 100%;
}

.progress-bar-inactive {
    display: block;
    height: 8px;
    width: 100%;
    visibility: hidden;
}
`

function ImageUploader ({ json, setJson }){
    
    const [progress, setProgress] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);

    const handleUploadImage = async (files) => {
        let arrAux = [];
        if(files.length > (5 - json.images.length)) {
            var iterations = (5 - json.images.length);
        } else {
            var iterations = files.length;
        }
        for(let i = 0; i < iterations; i++) {
            const formData = new FormData();
            formData.append('file', files[i]);
            formData.append('upload_preset', 'dhalbnfi');
            const res = await axios.post('https://api.cloudinary.com/v1_1/daau4qgbu/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress(e) {
                    setProgressVisible(true);
                    setProgress((e.loaded * 100) / e.total);
                }
            });
            arrAux.push(res.data.url);
            setProgress(0);
            setProgressVisible(false);
        }
        setJson({
            ...json,
            images: [...json.images, ...arrAux]
        });
    };

    const handleOnClose = (url) => {
        setJson({
            ...json,
            images: json.images.filter(src => src !== url)
        });
    }

    return(
        <Image_UL>
            <div className='card-previewer'>
                {json.images.map((url, i) => {
                    return <div className='img-view-container' key={i}>
                        <img src={url} alt='' className='img-view'/>
                        <div className='img-front-film'>Imagen {i + 1}</div>
                        <button className='onclose-btn' value={url} onClick={e => handleOnClose(e.target.value)}>X</button>
                    </div>
                })}
            </div>
            <progress 
                value={progress} 
                max='100' 
                className= {progressVisible ? 'progress-bar-active' : 'progress-bar-inactive'} 
            />
            <label className='card-footer' for='input-file'>
                <input 
                    type='file' 
                    className='img-uploader' 
                    onInput={e => handleUploadImage(e.target.files)}
                    disabled={json.images.length < 5 ? false : true}
                    multiple
                    accept="image/png, image/jpeg"
                    id='input-file'
                />
                <BiImageAdd />
                Agregar imagenes
            </label>
        </Image_UL>
    );
}

export default ImageUploader;
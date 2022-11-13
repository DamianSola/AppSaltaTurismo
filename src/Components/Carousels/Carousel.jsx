import React, { useState } from "react";
import { useEffect } from "react";

import {CarouselDiv,Title, Contenido, Imagen, Buttons, Image, NameCard, ArrowImage, Linked, Card} from './StyleCarousel'

// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';



const Carousel = () => {

    const [carrusel, setCarrusel] = useState(1)


    const leftButton = () => {
        if(carrusel !== 1){
            setCarrusel(carrusel - 1)
        }else setCarrusel(images.length)
    }
    const rigthButton = () => {
        if(carrusel === images.length){
            setCarrusel(1)
        }else{setCarrusel(carrusel + 1)}
    }


    console.log(carrusel)
    


    const images = [
        {title:"Cabildo de Salta",
        img:"https://cloudfront-us-east-1.images.arcpublishing.com/artear/UAJ7RFJZC5ESLBIVYITBLT7OMY.jpg"},
        {title:"Monuento a Guemes",
        img:'https://www.todowebsalta.com.ar/wp-content/uploads/2020/09/monumento-a-guemes-atardecer_1.jpg'},
        {title:"Iglesia de San Francisco de Asis",
        img:'https://live.staticflickr.com/6201/6032946686_908c3c8314_b.jpg'},
        {title:"Convento San Bernardo",
        img: 'https://www.buenosdiassalta.com.ar/public/images/noticias/1798-bajo-el-lema-hermana-si-te-creo-mujeres-concentraran-en-el-convento-en-apoyo-a-las-carmelitas-descalzas.jpg'}
    ]

    let filtImagen = images[carrusel-1]

   let backImage = {        
    backgroundImage: 'url(' + filtImagen.img + ')',
    backgroundSize: '65rem',}

    

    return(
        <CarouselDiv style = {backImage}>
            <Buttons onClick={leftButton}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg></Buttons>
            {/* <Contenido> */}
            {/* <Imagen src={filtImagen.img}/> */}
            <Title>{filtImagen.title}</Title>
            {/* </Contenido> */}
            <Buttons onClick={rigthButton}><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></Buttons>
        </CarouselDiv>
    )
}

export default Carousel;
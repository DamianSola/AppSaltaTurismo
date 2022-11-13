import styled from "styled-components";

export const CarouselDiv = styled.div `
   display: flex;
   width: 100%;
   height: 35rem;
   background-repeat: no-repeat;
   background-position: center;
   justify-content: space-between;

`
export const Title = styled.h4 `
position: absolute;
margin-left: 10%;
color: white;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 30px;
`
// export const Contenido = styled.div `
//    display: flex;
//    flex-direction: column;
// `

export const Imagen = styled.img`
   width: 60rem;
   height: 35rem;
`
export const Buttons = styled.button`
   color: rgb(47, 79, 79);
   /* background-color: #ffffff; */
   background-color: rgba(246, 244, 242, 0);
   margin: 0 30px;
   /* border-radius: 100%; */
   /* height: 40px; */
   border: none;
   opacity: 0.3;
   padding: 0;
   
   &&:hover{
      opacity: 0.7;
   }
   
`

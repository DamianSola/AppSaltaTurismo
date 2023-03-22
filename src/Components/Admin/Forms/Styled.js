import styled from "styled-components";
import Modal from 'react-modal';

export const ModalContainer = styled(Modal)`
    display: block;
    width: 65%;
    min-height: 20%;
    /* background-color: #87CEFA; */
    background-color: #ECF0F1 ;
    padding: 20px;
    border: solid 1px black;
    border-radius: 10px;
    transform: translate(25%, 5%);
`


export const ContainerForm = styled.div`
display: block;
margin: auto;
justify-content: center;
`
export const Forms = styled.div`
display: block;

 .images{
    display: flex;
    /* display: grid; grid-template-columns: 200px 200px 200px; */
    font-size: 15px;
 }
`

export const Label = styled.label`
padding: 5px;
margin: 10px;
`

export const CloseButton = styled.button`
display: block;
/* background-color: #87CEFA; */
background-color: #D0D3D4;
padding: 3px;
width: 20px;
/* border-style: none; */
border-radius: 2px;
border: solid 0.5px;
margin-left: 95%;
/* text-align: right; */

&&:hover{
    color: white;
    background-color: red;
}
`

export const Input = styled.input`
padding: 5px;
margin: 10px 0;
width: ${prop => prop.name === "name" && "40%" };
text-align: left;
`

export const InputDescription = styled.textarea`
padding: 5px;
margin: 10px 0;
width: 90%;
height: 150px;
`

export const TitleForm = styled.p`
font-size: 30px;
width: 100%;
text-align: center;
` 
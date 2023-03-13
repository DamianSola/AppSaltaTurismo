import styled from "styled-components";
import Modal from 'react-modal';


export const ContainerModal = styled.div`
/* background-color: black; */
/* border: solid 0.5px;
border-radius: 10px;
width: 100%; */
`
export const ModalContainer = styled(Modal)`
    display: block;
    /* margin: auto; */
    width: 50%;
    min-height: 20%;
    background-color: #87CEFA;
    padding: 20px;
    border: solid 1px black;
    border-radius: 10px;
    transform: translate(45%, 10%);
    /* transform: translate(-50%, -50%) ; */
`


export const ContainerForm = styled.div`
display: block;

`
export const Forms = styled.div`
display: block;
`

export const Label = styled.label`
padding: 5px;
margin-right: 10px;
display: block;
text-align: right;
`

export const CloseButton = styled.button`
color:white;
background-color: red;
padding: 10px;
border-style: none;
border-radius: 5px;
border: solid 0.5px red;
text-align: right;

&&:hover{
    border-color: black;
}
`

export const Input = styled.input`
padding: 5px;
margin: 10px;
/* width: 80%; */
line-height: ${props => props.props === "description" && "10" };
width: ${prop => prop.value !== "agregar actividad" && "70%" };
/* height: ${props => props.props === "description" && "100px" }; */
text-align: left;
`
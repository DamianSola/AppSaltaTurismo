import styled from "styled-components";
import Modal from 'react-modal';
import { CloseButton } from "reactstrap";


export const ModalContainer = styled(Modal)`
    display: block;
    /* background-color: #87CEFA; */
    width: 80%;
    min-height: 50%;
    transform: translate(10%, 2%);
    padding: 20px;
    border: solid 1px black;
    border-radius: 10px;
    background-color: white;

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
        justify-content: space-between;
        font-size: 15px;
    }

    .content{
        display: flex;

    }
    .label{
        margin: 0 10px 10px 0;
    }

    .first{
        display: block;
        margin:20px
    }
    .second{
        width: 90%;
        margin:20px
    }

    .errorText{
        font-size: 12px;
        color: red;
    }
`

export const Label = styled.label`
margin: 10px;
`

export const CloseBut = styled(CloseButton)`
display: block;
background-color: white;
padding: 3px;
width: 20px;
font-size: 30px;
border-style: none;
margin-left: 95%;

&&:hover{
    color: red;
    /* background-color: red; */
}
`

export const Input = styled.input`
padding: 5px;
margin: 10px 0;
width: ${prop => prop.name === "name" && "80%" };
text-align: left;
border: solid 0.5px;
/* border-bottom: solid 0.5px; */
`

export const InputDescription = styled.textarea`
padding: 5px;
margin: px 0;
width: 100%;
height: 200px;
`

export const TitleForm = styled.p`
font-size: 30px;
width: 100%;
text-align: center;
` 
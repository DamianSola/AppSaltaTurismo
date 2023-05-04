import styled from "styled-components";
import Modal from 'react-modal';
import { CloseButton } from "reactstrap";


export const ModalContainer = styled(Modal)`
    display: block;
    width: 80%;
    transform: translate(10%, 2%);
    padding: 20px;
    border: solid 1px black;
    border-radius: 10px;
    background-color: white;
    scroll-behavior: auto;

`
export const ContItems = styled.div`
display: flex;
flex-wrap: wrap;
`
export const ItemsMini = styled.div`
width: auto;
display: flex;
flex-direction: row;
border-radius: 5px;
align-items: center;
margin: 5px;
padding: 5px;
background-color:#E2E2E2;

button{
    border-style: none;
    background-color: #E2E2E2;
    border-radius: 5px;
    font-size: 10px;
    padding: none;
}
p{
    font-size: 12px;
}
` 

export const ContainerForm = styled.div`
display: block;
margin: auto;
justify-content: center;
`
export const Forms = styled.div`
    display: grid;

    .images{
        display: flex;
        justify-content: space-between;
        font-size: 15px;
    }

    .content{
        display: flex;
        height: 100%;

    }
    .label{
        margin: 0 10px 10px 0;
    }

    .first{
        display: flex;
        flex-direction:column;
        margin:20px
    }

    .second{
        width: 90%;
        margin:0 20px
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
width: 10px;
font-size: 20px;
border-style: none;
margin-left: 95%;

&&:hover{
    color: red;
}
`

export const Input = styled.input`
padding: 5px;
margin: 10px 0;
width: ${prop => prop.name === "name" && "250px" };
text-align: left;
border: solid 0.5px;
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
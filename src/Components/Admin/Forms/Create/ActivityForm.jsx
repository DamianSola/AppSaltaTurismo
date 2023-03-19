import React from "react";
import {
    Button,
    Form,
    TextBox,
  } from 'react-form-elements'
import { ContainerModal, CloseButton, ContainerForm, Forms, 
    Label,ModalContainer,Input, InputDescription, TitleForm } from "../Styled";


const ActivityFormPost = ({close}) => {
    

    return(
       
        <ModalContainer isOpen={true}>
        <CloseButton onClick={close}>x</CloseButton>
       <ContainerForm>
        <TitleForm >Agragar una nueva actividad</TitleForm>
        <Forms >
            <Label>nombre:</Label>
                <Input type="text" name="name"/>
            <Label>imagen:</Label>
                <Input type="file" multiple name="images"/>
            <br/>
            <Label>Pueblo:</Label>
                <Input type="text"/>
            <Label>Sub categoria:</Label>
                <Input type="text"/>
            <br/>      
            <Label >descripcion:</Label>
                <InputDescription  name="description" />
            <Input type="submit" value="agregar actividad" name="agregar"/>
        </Forms>
        </ContainerForm>
        </ModalContainer>
   
    )
} 

export default ActivityFormPost;
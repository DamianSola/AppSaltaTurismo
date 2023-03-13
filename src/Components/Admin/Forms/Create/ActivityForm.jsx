import React from "react";
// import { Form } from "react-bootstrap";
import Modal from 'react-modal';
import { ContainerModal, CloseButton, ContainerForm, Forms, Label,ModalContainer,Input } from "../Styled";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '60%',
    //   height: "60%",
    //   padding: 'none',
      transform: 'translate(-50%, -50%)',
      Transition: '0.5s',
      background: "#87CEFA",
      border: 'black',

    }
  };

const ActivityFormPost = ({close}) => {
    

    return(
        // <ContainerModal >
            <ModalContainer isOpen={true}>
        <CloseButton onClick={close}>X</CloseButton>
       <ContainerForm>
        <Forms>
            <Label>
                nombre:
                <Input type="text"/>
            </Label>
            <br/>
            <Label >
                descripcion:
                <Input  props="description"/>
            </Label>
            <br/>
            <Label>
                imagen 1:
                <Input type="image"/>
            </Label>
            <Label>
                imagen 2:
                <Input type="file"/>
            </Label>
            <Input type="submit" value="agregar actividad"/>
        </Forms>
        </ContainerForm>
        </ModalContainer>
    //    </ContainerModal>
    )
} 

export default ActivityFormPost;
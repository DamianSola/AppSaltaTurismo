import React from "react";
import { CloseButton, Forms, Input, Label, ModalContainer, TitleForm } from "../Styled";



const AddCategoryModal = ({close}) => {


    return(
        <ModalContainer isOpen={true}>
            <CloseButton onClick={close}>x</CloseButton>
            <TitleForm>Nueva categoria</TitleForm>
            <Forms>
                <Label>nombre: </Label>
                <Input type="text"/>
                <Label>imagen: </Label>
                <Input type="file"/>
            </Forms>
        </ModalContainer>
    )
}

export default AddCategoryModal;

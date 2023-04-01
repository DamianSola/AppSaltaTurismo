import React from "react";
import { CloseBut, Forms, Input, Label, ModalContainer, TitleForm } from "../Styled";

const AddSubCategory = ({close}) => {


    return(
        <ModalContainer isOpen={true}>
            <CloseBut onClick={close}/>
            <TitleForm>Nueva sub categoria</TitleForm>
            <Forms>
                <Label>nombre:</Label>
                <Input type="text"/>
                <Label>categoria</Label>
                <Input type="text"/>
            </Forms>
        </ModalContainer>
    )
}

export default AddSubCategory;

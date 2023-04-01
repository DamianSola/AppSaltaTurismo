import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSubCategories } from "../../../../Redux/Actions/Index";
// import Modal from 'react-modal';
import {ModalContainer, CloseBut, TitleForm, Forms, Label, Input} from "../Styled"
import styled from "styled-components";
import SubCategoryCard from "../../../SubCategories/SubCategoryCard";


const Body = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
// const MarginCard = styled.div`
// `

const PutSubCategory = ({close, id}) => {

    const {oneSubCategory} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(oneSubCategory)

    useEffect(() => {
        dispatch(getOneSubCategories(id))
    },[])

    return(
        <ModalContainer isOpen= {true}>
            <CloseBut onClick={close}/>
            <TitleForm>Hacer cambios?</TitleForm>
            <Body>
                <Forms>
                <Label>nombre:</Label>
                <Input type="text"/>
                <Label>imagen:</Label>
                <Input type="file"/>
                <Label>Categoria:</Label>
                <Input type="text"/>
                </Forms>

                <SubCategoryCard 
                name={oneSubCategory.name}
                id={oneSubCategory.id}
                showButton={false}
                image={oneSubCategory.image}
                // category= {oneSubCategory.category && oneSubCategory.category.name}
                />            
            </Body>
        </ModalContainer>
    )
}

export default PutSubCategory;
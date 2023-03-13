import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerTwo, ContainerSubCategories } from "./SubCateStyled";
import SubCategoryCard from './SubCategoryCard';
import CategoriesHome from '../Categories/Categories'
import { useEffect } from "react";
import { useParams } from "react-router";
import { getOneCategory } from "../../Redux/Actions/Index";



const SubCategories = () => {

    let {id} = useParams()
    let {oneCategry} = useSelector(s => s)
    let dispatch = useDispatch()

    let subCategories = oneCategry.subCategories

    useEffect(()=>{
        dispatch(getOneCategory(id))
    }, [])

    return(
        <ContainerSubCategories>
            <h1>{oneCategry.name}</h1>
            <ContainerTwo>

            {subCategories? subCategories.map(e => {
                return <SubCategoryCard name={e.name} image={e.image} id={e.id} Key={e.id}/>
            }):
            <h1>No hay datos</h1>
            }
            </ContainerTwo>
            <h2 text-aling="left">Ver Tambien</h2>
            <CategoriesHome/>
        </ContainerSubCategories>

    )
}
export default SubCategories;

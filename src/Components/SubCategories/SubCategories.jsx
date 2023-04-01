import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerTwo, ContainerSubCategories } from "./SubCateStyled";
import SubCategoryCard from './SubCategoryCard';
import CategoriesHome from '../Categories/Categories'
import { useEffect } from "react";
import { useParams } from "react-router";
import { getOneCategory, getAllCategories, ClearPage} from "../../Redux/Actions/Index";
import { Link } from "react-router-dom";



const SubCategories = () => {

    let {id} = useParams()
    let {oneCategry, allCategories} = useSelector(s => s)
    console.log(allCategories)
    let dispatch = useDispatch()

    let subCategories = oneCategry.subCategories;


    useEffect(()=>{
        dispatch(ClearPage("categories"))
        dispatch(getOneCategory(id))
        dispatch(getAllCategories())

    },[dispatch])

    return(
        <ContainerSubCategories>
            <div className="categories">
                <h4>Otras categorias</h4>
                {allCategories && allCategories.map(e => {
                    return <Link exact to={`/categories/${e.id}`}>{e.name}</Link>
                })}
            </div>
            
            <div>
            <h1 key='1'>{oneCategry.name}</h1>
            <ContainerTwo>
            {subCategories? subCategories.map(e => {
                return <SubCategoryCard name={e.name} showButton={true} image={e.image} id={e.id} Key={e.id}/>
            }):
            <h1>No hay datos</h1>
            }
            </ContainerTwo>
            </div>
        </ContainerSubCategories>

    )
}
export default SubCategories;

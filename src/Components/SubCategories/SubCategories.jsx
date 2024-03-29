import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerTwo, ContainerSubCategories } from "./SubCateStyled";
import SubCategoryCard from './SubCategoryCard';
import { useEffect } from "react";
import { useParams } from "react-router";
import { getOneCategory, getAllCategories} from "../../Redux/Actions/Index";
import { Link } from "react-router-dom";



const SubCategories = () => {

    let {id} = useParams()
    let {oneCategry, allCategories} = useSelector(s => s)
    // console.log(allCategories)
    let dispatch = useDispatch()

    let subCategories = oneCategry.subCategories;


    useEffect(()=>{
        dispatch(getOneCategory(id))
        dispatch(getAllCategories())

    },[dispatch])

    return(
        <ContainerSubCategories>
            <div className="categories">
                <h4>Otras categorias</h4>
                {allCategories && allCategories.map(e => {
                    return <Link className="link" exact to={`/categories/${e.id}`} onClick={() => dispatch(getOneCategory(e.id)) }>{e.name}</Link>
                })}
            </div>
            
            <div className="category-details">
            <h1 key='1'>{oneCategry.name}</h1>
            <h6>{oneCategry.description}</h6>
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

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/Index";
import CategoriesCard from "./CategoriesCard";
import { CategoriesC } from "./StyledCategories";

const CategoriesHome = () => {

    const {allCategories} = useSelector(s => s)
    const dispatch = useDispatch()
    // console.log(allCategories)

    useEffect(()=>{
        dispatch(getAllCategories())
    },[])

    return(
        <CategoriesC>
            {allCategories && allCategories.map(e => {
                return <CategoriesCard name={e.name} id={e.id} image={e.image} key={e.id}/>
            })}
        </CategoriesC>
    )
}

export default CategoriesHome;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities, getOneSubCategories, likeActivity } from "../../Redux/Actions/Index";
import { 
        ContainElement,
        ContainerList, Title, Image,
        Description, ContainTwo, Containtree,
        Likes, SubCategory, LikeButton, SeeMore 
} from "./StyledList";
import { Link, useParams } from "react-router-dom";

const ElementList = () => {

    let {id} = useParams()

    let dispatch = useDispatch()
    let {oneSubCategory} = useSelector(s => s)
    // console.log(oneSubCategory)
    const activities = oneSubCategory.activities
    console.log(activities)


    

    useEffect(() => {
        dispatch(getOneSubCategories(id))
    },[])

    return(
        <ContainerList>
           {activities && activities.length > 0 ? activities.map((e) => {
            return <ContainElement key={e.id}>
                <Image src={e.images}/>
                <ContainTwo>
                    <Containtree>
                        <Title>{e.name.toUpperCase()}</Title>
                        <Likes>likes {e.likes}</Likes>
                    </Containtree>
                <Description>{e.description}</Description>                
                <SeeMore> <Link to="/" > Ver mas </Link> </SeeMore>
                </ContainTwo>
            </ContainElement>
           }): <h3>Sin actividades</h3> }
        </ContainerList>
    )
}

export default ElementList;
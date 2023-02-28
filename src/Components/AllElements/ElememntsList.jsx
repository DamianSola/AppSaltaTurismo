import React, {useEffect } from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { getOneSubCategories } from "../../Redux/Actions/Index";
import { 
        ContainElement,
        ContainerList, Title, Image,
        Description, ContainTwo, Containtree,
        Likes, SeeMore 
} from "./StyledList";
import { Link, useLocation, useParams} from "react-router-dom";

const ElementList = () => {

    let {id} = useParams()

    let dispatch = useDispatch()
    let {oneSubCategory} = useSelector(s => s)
    // console.log(oneSubCategory)
    const activities = oneSubCategory.activities

    useEffect(() => {
        dispatch(getOneSubCategories(id))
    },[])

    return(
        <ContainerList>
           {activities && activities.length > 0 ? activities.map((e) => {
            return <ContainElement key={e.id}>
                <Image src={e.images}/>
                <Title>{e.name.toUpperCase()}</Title>
                <ContainTwo>
                <Description>{e.description}</Description>                
                <Containtree>
                <Likes>
                {e.likes}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" color="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                </Likes>
                    <SeeMore exact to={`/sub-categories/activity/${e.id}`}> Ver mas {" >"}</SeeMore>
                </Containtree>
                </ContainTwo>
            </ContainElement>
           }): <h3>Sin actividades</h3> }
        </ContainerList>
    )
}

export default ElementList;
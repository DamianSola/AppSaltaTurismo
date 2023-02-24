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
                <Likes>likes {e.likes}</Likes>
                    <SeeMore exact to={`/sub-categories/activity/${e.id}`}> Ver mas {" >"}</SeeMore>
                </Containtree>
                </ContainTwo>
            </ContainElement>
           }): <h3>Sin actividades</h3> }
        </ContainerList>
    )
}

export default ElementList;
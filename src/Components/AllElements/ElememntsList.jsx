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
    const activities = oneSubCategory.activities

    useEffect(() => {
        dispatch(getOneSubCategories(id))
    },[])

    return(
        <ContainerList>
            <p className="subCategoryName" >{oneSubCategory.name}</p>
            <div className="body">

           {activities && activities.length > 0 ? activities.map((e) => {
               return <ContainElement key={e.id}>
                <Likes>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" color="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                {"  "+e.likes}
                </Likes>

                <Image src={e.images.length == 1? e.images: e.images[0]}/>
                <ContainTwo>
                <Title>{e.name.toUpperCase()}</Title>
                <Description>{e.description.slice(0,150)} ... mas</Description>                
                <Containtree>
                    <SeeMore><Link className="Link" exact to={`/sub-categories/activity/${e.id}`}> Ver mas </Link></SeeMore>
                </Containtree>
                </ContainTwo>
            </ContainElement>
           }): <h3>Sin actividades</h3> }
           </div>
        </ContainerList>
    )
}

export default ElementList;
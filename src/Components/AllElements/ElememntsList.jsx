import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities, likeActivity } from "../../Redux/Actions/Index";
import { ContainElement,
     ContainerList, Title, Image,
      Description, ContainTwo, Containtree,Likes, SubCategory, LikeButton } from "./StyledList";


const ElementList = () => {

    let [like, setLike] = useState(false)
    // let [likes, setlikes] = useState([])

    let dispatch = useDispatch()
    let {allActivities} = useSelector(s => s)
    console.log(allActivities)

    const ClickLike = (like, activity, index) => {
        console.log(activity)
        if(like){
            dispatch(likeActivity(activity));
            setLike(false)
            // dispatch(getAllActivities())
        }else{
           dispatch(likeActivity(activity))
           setLike(true)
        //    dispatch(getAllActivities())
        }
    }
    // console.log(like)

    // const arrayLikes = () => {
    //     let arr = allActivities && allActivities.map(e => e.likes)
    // }


    useEffect(() => {
        dispatch(getAllActivities())
        // arrayLikes()
    },[])

    return(
        <ContainerList>
           {allActivities ? allActivities.map((e,i) => {
            return <ContainElement key={e.id}>
                <Image src={e.images}/>
                <ContainTwo>
                <Title>{e.name.toUpperCase()}</Title>
                <Description>{e.description}</Description>
                </ContainTwo>
                <Containtree>
                    <SubCategory>{e.subCategory.name.toUpperCase()}</SubCategory>
                    <Likes>likes {e.likes}</Likes>
                    <LikeButton onClick={() => ClickLike(like, e.id, i)}>like</LikeButton>
                    {/* <p>{e.id}</p> */}
                </Containtree>
            </ContainElement>
           }): <h3>Sin actividades</h3> }
        </ContainerList>
    )
}

export default ElementList;
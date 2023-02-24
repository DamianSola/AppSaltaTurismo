import React,{ useEffect } from "react";
import { ActivitiesContainer,Title, Photo, Slyder} from "./StyleActivities";
import {useDispatch,useSelector} from 'react-redux'
import {getOneActivity} from "../../Redux/Actions/Index"
import { useParams } from "react-router";
import  Carousel  from "../Carousels/Carousel";

const Activities = () => {
    let {id} = useParams()
    
    // let hardcode = [
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
    //     {title:"titulo", image: "https://www.ejemplos.in/wp-content/uploads/2021/04/ejemplos-de-atracciones-turisticas.jpg"},
    //     {title:"titulo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi2OxBTH0-SO3R78ZE63JYIsBnjEm6CRHUIAs5rKHnrgALrhmWGxWsf8sHUNRr0WmDz8&usqp=CAU"},
    //     {title:"titulo", image: "https://www.eltiempo.com/files/article_content/uploads/2020/11/06/5fa5e7f13092f.jpeg"},
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
    //     {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},

    // ]

    const dispatch = useDispatch()
    const {oneActivity} = useSelector(state => state)
    let {likes,images,description,name,} = oneActivity

    useEffect(()=>{
        dispatch(getOneActivity(id))
    },[dispatch])

  
    return (
        <ActivitiesContainer>
            <Title>{name}</Title>
            <Carousel images={images}/>
            {/* <Slyder>
                {images && images.map((e,i) => {
                    return  <Photo src={e} key={i}/> 
                })}
            </Slyder> */}
          
        </ActivitiesContainer>
    )
}

export default Activities
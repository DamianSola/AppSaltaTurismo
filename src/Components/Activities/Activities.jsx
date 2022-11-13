import React from "react";
import { ActivitiesContainer,Title, Image, OnlyActivities } from "./StyleActivities";
import ActivityCard from "../ActivitiesCard/ActivityCard";

const Activities = () => {

    let hardcode = [
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
        {title:"titulo", image: "https://www.ejemplos.in/wp-content/uploads/2021/04/ejemplos-de-atracciones-turisticas.jpg"},
        {title:"titulo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi2OxBTH0-SO3R78ZE63JYIsBnjEm6CRHUIAs5rKHnrgALrhmWGxWsf8sHUNRr0WmDz8&usqp=CAU"},
        {title:"titulo", image: "https://www.eltiempo.com/files/article_content/uploads/2020/11/06/5fa5e7f13092f.jpeg"},
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},
        {title:"titulo", image: "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg"},

    ]

    // console.log(hardcode.map(e => e.title))


    return (
        <ActivitiesContainer>
            <Title>
                Actividades
            </Title>
            <OnlyActivities>

            {hardcode && hardcode.map((e,index) => {
                return (
                <ActivityCard key={index} title= {e.title}  image= {e.image}/>)
            })}

            </OnlyActivities>
        </ActivitiesContainer>
    )
}

export default Activities
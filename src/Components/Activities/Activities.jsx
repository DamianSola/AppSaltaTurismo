import React, { useEffect, useState } from "react";
import {
  ActivitiesContainer,
  Title,
  Image,
  OnlyActivities,
} from "./StyleActivities";
import ActivityCard from "../ActivitiesCard/ActivityCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../Redux/Actions/Index";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper";

const Activities = () => {
  let hardcode = [
    {
      title: "img1",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
    {
      title: "img2",
      image:
        "https://www.ejemplos.in/wp-content/uploads/2021/04/ejemplos-de-atracciones-turisticas.jpg",
    },
    {
      title: "img3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsi2OxBTH0-SO3R78ZE63JYIsBnjEm6CRHUIAs5rKHnrgALrhmWGxWsf8sHUNRr0WmDz8&usqp=CAU",
    },
    {
      title: "img4",
      image:
        "https://www.eltiempo.com/files/article_content/uploads/2020/11/06/5fa5e7f13092f.jpeg",
    },
    {
      title: "img5",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
    {
      title: "img6",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
    {
      title: "img7",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
    {
      title: "img8",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
    {
      title: "img9",
      image:
        "https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo.jpg",
    },
  ];

  const [activ, setActiv] = useState([]);

  /* const dispatch = useDispatch()
    const {allActivities} = useSelector(state => state.allActivities)
    console.log(allActivities) */
  // let activities = allActivities.rows

  useEffect(() => {
    /* dispatch(getAllActivities()) */
    setActiv(hardcode);
  }, []);

  // console.log(hardcode.map(e => e.title))

  return (
    <ActivitiesContainer>
      {console.log(activ)}
      <Title>ACTIVITIES</Title>
      <OnlyActivities>
        {hardcode &&
          hardcode.map((e, index) => {
            return <ActivityCard key={index} title={e.name} image={e.image} />;
          })}
      </OnlyActivities>
    </ActivitiesContainer>
  );
};

export default Activities;

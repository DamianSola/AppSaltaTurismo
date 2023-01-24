import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ActivityCard from "../ActivitiesCard/ActivityCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PruebaActivities = () => {
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

  const [act, setAct] = useState([]);

  useEffect(() => {
    setAct(hardcode);
  }, []);
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@0.50": {
              slidesPerView: 1.25,
              spaceBetween: 25,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.25": {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }} 
      >
        {act.length > 0?
          act?.map((e, i) => (
            <SwiperSlide key={i}>         
              <ActivityCard key={i} title={e?.name} image={e?.image} />
            </SwiperSlide>
          )) : "No hay slides"}
      </Swiper>
      <div className="pagination"/>
    </div>
  );
};

export default PruebaActivities;

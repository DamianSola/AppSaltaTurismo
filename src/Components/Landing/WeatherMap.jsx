import React, { useEffect, useState } from "react";
import {WeathermapContain} from "./Styled"

const WeatherMap = () => {
    const [city, setCity] = useState({})

    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function getCity(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Salta&appid=${apiKey}&units=metric`)
    .then(r => r.json())
      .then((recurso) => {
        const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
        }
        setCity(city);//le agrega la nueva city.
       
      }
    );
  }

  useEffect(()=> {
    getCity();
  },[])
    return (  
        <WeathermapContain>
            <div className="image">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"}  alt="image-clima" />
              <p>{city.temp}°</p>
            </div>
        </WeathermapContain>
     )
}

export default WeatherMap;
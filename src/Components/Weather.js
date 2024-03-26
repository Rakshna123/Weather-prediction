import React, {useState} from 'react'
import searchIcon from '../Assets/search.jpeg'; 
import clear from '../Assets/clear.webp';
import cloud from '../Assets/cloud.avif';
import drizzle from '../Assets/drizzle.jpg';
import rainny from '../Assets/rainny.jpg';
// import wind from '../Assets/wind.jpg';
import snow from '../Assets/snow.avif';
// import windIcon from '../Assets/windIcon.PNG'
import { WeatherDetails } from './WeatherDetails';



export const Weather = () => {
    let apiKey = "f3902b21c0dd69b6710e41eb63743ce0"
    const [text, setText] = useState("Chennai");
    const [icon,setIcon] = useState(snow);
    const [temp,setTemp] = useState(0);
    const [city,setCity] = useState("Chennai");
    const [country, setCountry] = useState("India");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [humidity, setHumidity] =  useState(0);
    const [wind, setWind] =  useState(0);
    const [cityNotFound, setCityNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const weatherIconMap ={
    "01d":clear,
    "01n":clear,
    "02d":cloud,
    "02n":cloud,
    "03d":drizzle,
    "03n":drizzle,
    "04d":drizzle,
    "04n":drizzle,
    "09d":rainny,
    "09n":rainny,
    "10d":rainny,
    "10n":rainny,
    "13d":snow,
    "13n":snow
    }
   
    const search = async () =>{
      setLoading(true)
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&units=Metric`;

      try{
        let res = await fetch(url);
        let data = await res.json(); // to convert readable stream to json data

        if (data.cod==="404") {
          console.log("City not found");
          setCityNotFound(true);
          setLoading(false);
          return;
        }

        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setTemp(Math.floor(data.main.temp));
        setCity(data.name);
        setCountry(data.sys.country);
        setLatitude(data.coord.lat);
        setLongitude(data.coord.lon);
        const weatherIconCode = data.weather[0].icon;
        setIcon(weatherIconMap[weatherIconCode] || clear);
        setCityNotFound(false)
      } catch(error){
       console.log("Error occurred:", error.message);
      }finally{
        setLoading(false);
      }
    }

    const handleCity = (e) =>{
    setText(e.target.value);
    };

    const handleKeyDown = (e) =>{
      if (e.key === "Enter") {
        search();
      }
    } 

  return (
    <div>
        <div className='container'>
            <div className='input-container'>
                <input className='citySearch form-control me-2 search'
                type='search'
                placeholder='Search city' 
                onChange={handleCity}
                onKeyDown={handleKeyDown}
                value={text}/>
                <br/>
                <br/>
                <div className='searchIcon' onClick={()=>search()}> 
                    <img src={searchIcon} alt="no img" style={{height:"35px", width:"35px"}}/> 
                 </div> 
            </div>
            <br/>
            <br/>
            <br/>
            <WeatherDetails 
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            latitude={latitude}
            longitude={longitude}
            humidity={humidity}
            wind={wind}/>
        </div>
    </div>
  )
}

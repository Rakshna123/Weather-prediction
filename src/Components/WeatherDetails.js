import React from 'react' 
import humIcon from '../Assets/hicon.PNG';
import windIcon from '../Assets/windIcon.PNG'
export const WeatherDetails = ({icon,temp,city,country,latitude,longitude,humidity,wind}) => {
  return (
    <div>
        <div className='image'>
            <img src={icon} alt="img" style={{width:"300px", height:"300px"}}/>
        </div>
        <br/>
        <br/>
        <br/>
        <div className='temp'>{temp} ℃ </div>
            <br/>
        <div className='location'>{city}</div>
            <br/>
        <div className='country'>{country}</div>
            <br/>
        <div className='cord'>
            <div>
                <span className='lat'><b>Latitude </b></span>
                <span className='value'>{latitude}</span>
            </div>
            <br/>
            <div>
                <span className='long'><b>Longitde </b></span>
                <span className='value'>{longitude}</span>
            </div>
        </div>
        <div className='data-container'>
            <div className='element'>
                <img src={humIcon} alt="humidity" className='icon' style={{height:"130px", width:"130px"}}/>
                <div className='data'>
                    <div className='humidity-percent'>{humidity}%</div>
                    <div className='text'>Humiity</div>
                </div>
            </div>
            <div className='element'>
                <img src={windIcon} alt="wind" className='icon' style={{height:"130px", width:"130px"}}/>
                <div className='data'>
                    <div className='wind-percent'>{wind}km/hr</div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './Weather.css'
import Search_icon from '../assets/search.png'
import Clear_icon from '../assets/clear.png'
import Drizzle_icon from '../assets/cloud.png'
import Humidity_icon from '../assets/humidity.png'
import Rain_icon from '../assets/rain.png'
import Snow_icon from '../assets/snow.png'
import Wind_icon from '../assets/wind.png'
import Cloud_icon from '../assets/cloud.png'

const Weather = () => {
    
    let api_key = "e3b5d95e9b4fb099e210166ae9d1852f";
    
    const Search = async () =>{
        const element = document.querySelector('.city-input')
        if(element[0].value === ''){
            return 0
        }
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}`;
        let response = await fetch(apiUrl);
        let data = response.json();
        console.log(data); 
    }



  return (
    <div className='Weather'>
        <div className="top-bar">
            <input type="text" placeholder='search' className='city-input' />
            <img src={Search_icon} className='search_icon' onClick={()=>Search()} alt="" />
        </div>
        <div className="weather-image">
            <img src={Cloud_icon} />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Location</div>
        <div className="data-container">
            <div className="element">
                <img src={Humidity_icon} className='icon' alt="" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
                
            </div>
            <div className="element">
                <img src={Wind_icon} className='icon' alt="" />
                <div className="data">
                    <div className="humidity-percent">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Weather
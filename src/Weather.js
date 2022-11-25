import React from 'react';
import axios from 'axios';
import './App.css';

class Weather extends React.Component {
  state = {
    weather: {},
    main: {},
    data: {},
    inputloc: "Toronto"
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=1c75afc553470aa49adcadff5a51ba73&units=metric`)
    .then(res => {
        const weather = res.data;
        console.log(res.data);
        this.setState({ weather: weather.weather[0], main: weather.main, data: weather });
    })
    .catch((e) => console.log(e))
  }

  changeCity = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputloc}&appid=1c75afc553470aa49adcadff5a51ba73&units=metric`)
    .then(res => {
        const weather = res.data;
        console.log(weather);
        this.setState({ weather: weather.weather[0], main: weather.main, data: weather });
    })
    .catch((e) => console.log(e))
  }

  render() {
    const main = this.state.main;
    const weather = this.state.weather;
    return (
      <div>
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                  <div class="date-container">
                    {/* <h2 class="date-dayname">Tuesday</h2><span class="date-day">15 Jan 2019</span><i class="location-icon" data-feather="map-pin"></i><span class="location">{this.state.data.name}</span> */}
                    <h2 class="date-dayname"><span class="location">{this.state.data.name}</span></h2>
                  </div>
                <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
                    <h1 class="weather-temp">{main.temp}C</h1>
                    <h2 style={{ display: "flex", alignItems: "center"}}class="weather-desc">{weather.main}<img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img></h2>
                </div>
            </div>
            <div class="info-side">
                <div class="today-info-container">
                    <div class="today-info">
                        <div> <span class="title">Air Pressure</span><span class="value">{main.pressure}</span>
                            <div class="clear"></div>
                        </div>
                        <div> <span class="title">Feel Like</span><span class="value">{main.feels_like}</span>
                            <div class="clear"></div>
                        </div>
                        <div> <span class="title">Air Pressure</span><span class="value">{main.humidity}</span>
                            <div class="clear"></div>
                        </div>
                        <div> <span class="title">Max Temp</span><span class="value">{main.temp_max}</span>
                            <div class="clear"></div>
                        </div>
                        <div> <span class="title">Min Temp</span><span class="value">{main.temp_min}</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                {/* <div class="week-container">
                    <ul class="week-list"
                        <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name">Tue</span><span class="day-temp">29°C</span></li>
                        <li><i class="day-icon" data-feather="cloud"></i><span class="day-name">Wed</span><span class="day-temp">21°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name">Thu</span><span class="day-temp">08°C</span></li>
                        <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name">Fry</span><span class="day-temp">19°C</span></li>
                        <div class="clear"></div>
                    </ul>
                </div> */}
                <div class="location-container">
                  <input class="input-box" onChange={(e)=>{this.setState({inputloc: e.target.value})}}></input>
                  <button class="location-button" onClick={this.changeCity}> <i data-feather="map-pin"></i><span>Search</span></button>
                </div>
            </div>
        </div>
      </div>
      
    )
  }
}

export default Weather;

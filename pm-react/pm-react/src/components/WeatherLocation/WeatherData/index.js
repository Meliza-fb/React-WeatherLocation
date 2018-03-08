import React from 'react';
import Proptypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ( {data} )=>{
  const {temperature, weatherState, humidity, wind} = data;

  return (
    <div className='weatherDataCont'>
      <WeatherTemperature temperature= {temperature}
      weatherState = { weatherState }/>
      <WeatherExtraInfo humidity={humidity} wind= {wind}/>
    </div>
  )
};

WeatherData.proptypes={//validando data
  data: Proptypes.shape({ //shape es para validar objetos
    temperature: Proptypes.number.isRequired,
    weatherState:Proptypes.string.isRequired,
    humidity:Proptypes.number.isRequired,
    wind: Proptypes.string.isRequired,
  }),
};
export default WeatherData;

//alojar servicios para el constructor (API)
import{ CLOUD, CLOUDY, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../constant/weathers';

//Traer datos de iconos
const getWeatherState = weather => {
    const {id} = weather[0];
    if (id < 300) {
      return THUNDER;
    } else if (id <400){
      return  DRIZZLE;
    }else if (id < 600) {
      return  RAIN;
    }else if (id < 700) {
      return SNOW;
    }else if (id === 800) {
      return SUN;
    }else {
      return CLOUDY;
}
}
//Traer datos de API
const transformWeather = (weather_data) => {
  const {weather} = weather_data
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    //asociar icono con temperatura
    const weatherState = getWeatherState(weather);

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;

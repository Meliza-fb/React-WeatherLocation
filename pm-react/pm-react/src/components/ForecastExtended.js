import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
/*const days=['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const data= {
  temperature:10,
  humidity:10,
  weatherState: 'normal',
  wind:'normal'
}*/

const api_key='ff40361a52bda483d9424667248e70a0'
const url = `http://api.openweathermap.org/data/2.5/forecast`


class ForecastExtended extends Component {
  constructor(){
    super();
    this.state ={
      forecastData:null
    }
}

componentDidMount(){
  const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}&units=metric`;

  fetch(url_forecast).then(data=> (data.json())
).then(weather_data => {
    console.log(weather_data)
    const forecastData= transformForecast(weather_data);
    this.setState( {forecastData} )
  }
)

}

  renderForecastItemDays(forecastData){
    return forecastData.map(forecast=> (
      <ForecastItem
       key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
         hour={forecast.hour}
          data={forecast.data}>
          </ForecastItem>
        )
    ); /*days.map(day => (<ForecastItem key={day} weekDay={day} hour={10} data={data}></ForecastItem>))*/
  }

renderProgress(){
  return(<span>cargando pronostico extendido</span>)
}
  render(){
    const {city}=this.props;
    const {forecastData}= this.state
    return(
      <div>
      <h3 className="ForecastTitle">Pronóstico  extendido para {city}</h3>
      {forecastData ? this.renderForecastItemDays(forecastData): this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes={
  city:PropTypes.string.isRequired,
}

export default ForecastExtended;

import React, {Component} from 'react'; //Llamo a Component de app.js
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css'
//API
const api_key='ff40361a52bda483d9424667248e70a0'
//const location = 'Santiago,scl'   / ahora no necesitaremos una ciudad fija, lo haremos dinamico
const url = `http://api.openweathermap.org/data/2.5/weather`
//const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

/*crear la data    eliminamos la data para utilizar solo api
const data1= {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '3m/s'
}

//creamos otra data para dar funcionalidad al boton.
const data2 = {
    temperature: 10,
    weatherState: SNOW,
    humidity: 5,
    wind: '20m/s'
}                         */

//Construir componente de clase (vamos a transformar Weaterlocation para poder hacer mas cosas )

class WeatherLocation extends Component{
    constructor ({ city }){
        super();    //Hereda propiedades del constructor
      // se crean estados para que vayan cambiando, relacionado con las data.

        this.state = {  // elimino santiago para hacerlo dinamico
          city,
          data: null
        }
          console.log('constructor')
    }
/*Traer datos de iconos     <---SE lleva a services
getWeatherState = weather =>{
    return SUN;
}            */

/*Traer datos de API   <----Lo llevamos a carpeta services
    getData = (weather_data) =>{
        const {humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        //asociar icono con temperatura
        const weatherState = this.getWeatherState(this.weather)

        const data ={
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`
        }
        return data;
    }                           */

    componentWillMount() {   // cambio por component
        const {city}  = this.state
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;

        //seteamos el estado es decir, le decimos que cambie.
        /*Al agregar la api esto no se usa
        this.setState({
            //city: 'Santiago',    se quita, react actualiza partes nuevas, ya no es necesario.
            data: data2 })*/
        fetch(api_weather).then(data => {
             console.log(data);
             return data.json();   //que retorne en Json
        }).then(weather_data =>{
            const data =transformWeather(weather_data);
            console.log(weather_data);
            //setear para que pase al estado de la data
            this.setState({ data })
            console.log(weather_data);
        })


        console.log("actualizado");
    }

    //ciclos de vida

    /*componentWillMount(){    //se ejecuta antes del render
        this.handleUpdateClick();
    }*/

    /*componentDidMount(){    //se ejecuta despues del render
        console.log('componentDidMount')
    } */

    /*componentWillUpdate() { //se ejecuta antes del render la segunda vez,es decir al apretar boton actualizar
        console.log('componentWillUpdate')
    } */

    /*componentDidUpdate() {  //se ejecuta despues del render la segunda vez,es decir al apretar boton actualizar
        console.log('componentDidUpdate')
    } */

    render = () => {
      const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;     //refactorizamos, es lo mismo que this.state.data o this.state.city
        return(
            <div className= 'weatherLocation' onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={60} thickness={7}/>}
            </div>
        )

    }

}
WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,//lodeclaro como funcion
}

export default WeatherLocation;

/*const WheatherLocation = () => (
    <div>
        <Location city={'Guanaqueros'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
); */  //Componente funcional, lo reemplazamos por el componente de clase.

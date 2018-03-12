import React, {Component} from 'react';//llamo componentes de react
import {connect} from 'react-redux';//conecto rwct con redux
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render(){
    return(
      this.props.city &&
    
       <ForecastExtended city={this.props.city}></ForecastExtended>


    )
  }
}
/*
{city=== null ? <h3>No se seleccionó ninguna cuidad</h3> : <ForecastExtended city={city}></ForecastExtended>}
*/
const mapStateToProps =({city})=>(
  console.log(`este valor de mapStateToProps ${city}`), {city}
)

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

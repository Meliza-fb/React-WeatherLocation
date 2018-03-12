import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

//maneja todos los estdos
class LocationListContainer extends Component {
  handlerSelectionLocation = city => {//tecleo cada locacion
    //console.log(`hadlerSelectionLocationClick ${city}`);
    this.props.setCity(city);
  }
  render(){
    return(
      <LocationList cities={this.props.cities}
       onSelectedLocation={this.handlerSelectionLocation}></LocationList>

    )
  }
}

const mapDispatchToPropsActions= dispatch=>({
  setCity: value => dispatch(setCity(value))
});


export default connect(null, mapDispatchToPropsActions)(LocationListContainer)

//manejo de estados de las cuidades: Que cambie los estsdos de las cities

import {SET_CITY} from './../actions';

export const city = (state, action)=> {
  //return state;
  switch (action.type) {
    case SET_CITY:
      return {...state, city:action.value}//'...' Es un Operador de JS llama a todo lo que tiene state
      default:
      return state;

  }
}

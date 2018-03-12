import {createStore} from 'redux';
import { city } from './../reducers/city';
const initialState ={
  city: 'Buenos Aires'
};
/*const reducer = (state, action)=> {
  return state;
}*/
//export const store = createStore(()=>{}, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());

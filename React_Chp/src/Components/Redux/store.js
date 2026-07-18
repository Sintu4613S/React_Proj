import { createStore } from 'redux'
import rootReducer from './Reducer';
//Combine the Two Reducre or more than two

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


export default store;
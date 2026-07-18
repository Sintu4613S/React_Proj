import { combineReducers, createStore } from 'redux'
import { productReducer } from './Reducer/productreducer'
import { cartReducer } from './Reducer/cartReducer';
//Combine the Two Reducre or more than two
const rootReducer = combineReducers({
  productReducer,
  cartReducer
})
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);


export default store;
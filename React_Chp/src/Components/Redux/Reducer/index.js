//Main root for the Reducer
import { combineReducers } from 'redux'
import { productReducer } from './Reducer/productreducer'
import { cartReducer } from './Reducer/cartReducer'; const rootReducer = combineReducers({
  productReducer,
  cartReducer
})
export default rootReducer
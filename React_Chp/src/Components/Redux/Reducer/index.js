//Main root for the Reducer
import { combineReducers } from 'redux'
import { productReducer } from './productreducer'
import { cartReducer } from './cartReducer'


const rootReducer = combineReducers({
  productReducer,
  cartReducer
})
export default rootReducer
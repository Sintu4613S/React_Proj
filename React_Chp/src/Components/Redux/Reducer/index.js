//Main root for the Reducer
import { combineReducers } from 'redux'
import { productReducer } from './productreducer'


const rootReducer = combineReducers({
  productReducer,
})
export default rootReducer
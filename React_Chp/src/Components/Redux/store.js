import { createStore } from 'redux'
import { productReducer } from './Reducer/productreducer'
let store = createStore(productReducer);


export default store;
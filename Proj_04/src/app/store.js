import { configureStore } from '@reduxjs/toolkit'
import popReducer from '../features/popup/popSlice'
export const store = configureStore({
  reducer: {
    popup: popReducer,
  }
})

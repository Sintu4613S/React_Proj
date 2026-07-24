import { configureStore } from '@reduxjs/toolkit'
import popReducer from '../features/popup/popSlice'
import editReducer from '../features/edit/editSlice'
import employeeReducer from '../features/employees/empSlice'

export const store = configureStore({
  reducer: {
    popup: popReducer,
    edit: editReducer,
    employee: employeeReducer,
  }
})

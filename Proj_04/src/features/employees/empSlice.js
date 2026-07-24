import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, postEmployees } from "./employeethunk";

const initialState = {
  employees: [],
  loading: false,
  error: null

}

const empSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Getting or Fetching the Employees
    builder.addCase(getEmployees.pending,
      (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getEmployees.fulfilled,
        (state, action) => {
          state.employees = action.payload
          state.loading = false
        })
      .addCase(getEmployees.rejected,
        (state, action) => {
          state.loading = false
          state.error = action.payload;
        })

      //...PostEmployees...
      .addCase(postEmployees.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(postEmployees.fulfilled, (state) => {
        state.loading = false
      })

      .addCase(postEmployees.rejected, (state, action) => {
        state.loading = false
        state.error = ation.payload
      })


  }

})

export default empSlice.reducer
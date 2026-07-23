import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  employepopup: false,
  deletepopup: false,

}


const popupSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    openEmployePopup(state, action) {
      state.employepopup = action.payload ?? true

    },
    closeEmployepopup(state) {
      state.employepopup = false

    }
  },
})

// export const allPopUps = state => state.pops
export const { openEmployePopup, closeEmployepopup } = popupSlice.actions

export default popupSlice.reducer
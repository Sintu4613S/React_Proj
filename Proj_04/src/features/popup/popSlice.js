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

    },
    openDeletePopup(state, action) {
      state.deletepopup = action.payload ?? true

    },
    closeDeletepopup(state) {
      state.deletepopup = false
    }

  },
})

// export const allPopUps = state => state.pops
export const { openEmployePopup, closeEmployepopup, openDeletePopup, closeDeletepopup } = popupSlice.actions
//export const selectAllPopup = (state) => state.popup
export default popupSlice.reducer
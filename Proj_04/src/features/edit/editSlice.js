import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  editPageStatus: false
}
const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    openEdittab(state, action) {
      state.editPageStatus = action.payload ?? true
    },
    closeEdittab(state) {
      state.editPageStatus = false
    }
  }
})
export const { openEdittab, closeEdittab } = editSlice.actions
export default editSlice.reducer
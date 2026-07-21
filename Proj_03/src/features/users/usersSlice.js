import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 0, name: 'Dude Leboswki' },
  { id: 1, name: 'Nail Young' },
  { id: 2, name: 'Oddesy Ron' },
  { id: 3, name: 'Roman Frank' }
]
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducer: {

  }
})
export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
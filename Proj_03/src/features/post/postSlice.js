import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, name: "Introduction", content: "Welcome to learningJavaScript basics!" },
  {
    id: 2, name: "Variables", content: "Objects are variables that can contain many values."
  }

]

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  }
})
export default postSlice.reducer

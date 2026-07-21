import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: "Introduction", content: "Welcome to learningJavaScript basics!" },
  {
    id: 2, title: "Variables", content: "Objects are variables that can contain many values."
  }
]

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // postAdded(state,action){
    //   state.push(action.payload)
    // }
    postAdded:
    {
      reducer(state, action) {
        state.unshift(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        }
      }
    }

  }
})
export const selectAllPosts = (state) => state.posts
export const { postAdded } = postSlice.actions

export default postSlice.reducer

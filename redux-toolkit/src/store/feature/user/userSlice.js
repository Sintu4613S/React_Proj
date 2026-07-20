import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/fetchuser";

const initialState = {

  users: [],
  status: 'idle',
  error: null,
  loading: false

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchUser.pending, (state) => {
      state.status = "loading";
      state.loading = true
      state.error = null
    })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false
        state.users = action.payload
        //console.log(action.payload)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("Errorhai", action)
        console.log("Exact Error:", action.error?.message)
        state.status = "failed";
        state.error = action.error;
        state.loading = false;

      });
  },

})

export default userSlice.reducer
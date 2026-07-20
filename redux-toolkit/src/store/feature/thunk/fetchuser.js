import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      //console.log(data)
      return data

    } catch (error) {
      console.log("Error Occured", error)
      throw error;

    }
  })
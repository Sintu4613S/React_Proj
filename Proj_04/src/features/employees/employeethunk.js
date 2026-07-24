import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosinstance from "../../config/axiosinstance";

export const getEmployees = createAsyncThunk(
  'employees/getEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.get('users')
      console.log(response.data)
      return response.data
    }
    catch (error) {
      return rejectWithValue('Something Went Wrong')
    }

  }
)
export const postEmployees = createAsyncThunk(
  'employees/postEmployees',
  async (details, { rejectWithValue }) => {
    try {
      const response = await axiosinstance.post('users', details)
      // console.log(response.data)
      return response.data
    }
    catch (error) {
      return rejectWithValue('Something Went Wrong during posting the data')
    }

  }
)

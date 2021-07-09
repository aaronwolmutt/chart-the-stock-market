import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    finHubApiKey: process.env.REACT_APP_FINHUB_API_KEY
  }
})

export default authSlice.reducer

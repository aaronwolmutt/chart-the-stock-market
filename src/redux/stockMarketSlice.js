import { createSlice } from '@reduxjs/toolkit'

export const stockMarketSlice = createSlice({
  name: 'stockMarket',
  initialState: {
    formData: {
      symbol: 'KSS'
    },
    stockMarketPrices: []
  },
  reducers: {
    submittedStockForm: (state, action) => {
      state.formData = action.payload
    }
  }
})

export const { submittedStockForm } = stockMarketSlice.actions
export default stockMarketSlice.reducer

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
    submitStockForm: (state, action) => {
      state.stockMarketForm = action.payload
    }
  }
})

export const { submitStockForm } = stockMarketSlice.actions
export default stockMarketSlice.reducer

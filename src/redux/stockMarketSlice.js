import { createSlice } from '@reduxjs/toolkit'

export const stockMarketSlice = createSlice({
  name: 'stockMarket',
  initialState: {
    formData: {
      symbol: 'KSS',
      // initalilize 6 month window for daily stock prices
      from: Math.floor(new Date().setMonth(new Date().getMonth() - 6) / 1000),
      to: Math.floor(Date.now() / 1000)
    },
    stockMarketPrices: []
  },
  reducers: {
    // TODO:
    submitStockForm: (state, action) => {
      state.stockMarketForm = action.payload
    },
    stockFormChanged: (state, action) => {
      // works but throws non-serializable type error
      state.formData = {
        ...state.formData,
        [action.payload.id]: action.payload.value
      }
    }
  }
})

export const { submitStockForm, stockFormChanged } = stockMarketSlice.actions
export default stockMarketSlice.reducer

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
    // TODO:
    submittedStockForm: (state, action) => {
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

export const { submittedStockForm, stockFormChanged, stockMarketApiFetched } = stockMarketSlice.actions
export default stockMarketSlice.reducer

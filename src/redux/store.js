import { configureStore } from '@reduxjs/toolkit'
import stockMarketReducer from './stockMarketSlice'

export const store = configureStore({
  reducer: {
    stockMarket: stockMarketReducer
  }
})

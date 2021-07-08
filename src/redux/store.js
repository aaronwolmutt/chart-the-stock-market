import { configureStore } from '@reduxjs/toolkit'
import stockMarketReducer from './stockMarketSlice'
import navigationReducer from './navigationSlice'

export const store = configureStore({
  reducer: {
    stockMarket: stockMarketReducer,
    navigation: navigationReducer
  }
})

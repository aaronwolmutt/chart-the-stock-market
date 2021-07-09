import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import navigationReducer from './navigationSlice'
import stockMarketReducer from './stockMarketSlice'
import { stocksQuoteApi } from '../api/stockMarketApi'

export const store = configureStore({
  reducer: {
    stockMarket: stockMarketReducer,
    navigation: navigationReducer,
    auth: authReducer,
    [stocksQuoteApi.reducerPath]: stocksQuoteApi.reducer
  },
  middleWare: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(stocksQuoteApi.middleware)
})

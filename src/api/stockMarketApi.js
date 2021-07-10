import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = process.env.REACT_APP_FINHUB_API_KEY
export const stocksQuoteApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://finnhub.io/api/v1/'
  }),
  endpoints: (builder) => ({
    getStockPricesBetweenDays: builder.query({
      query: (stockForm) => ({
        url: `stock/candle?resolution=D&token=${apiKey}`,
        params: stockForm

      })
    })
  })
})

export const { useGetStockPricesBetweenDaysQuery } = stocksQuoteApi

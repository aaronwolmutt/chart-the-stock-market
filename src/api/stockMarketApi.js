import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const stocksQuoteApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://https://finnhub.io/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      const apiKey = getState().auth.finHubApiKey
      headers.set('X-Finnhub-Secret', apiKey)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getStockPricesBetweenDays: builder.query({
      query: (stockForm) => ({
        url: 'stock/candle?resolution=D',
        params: stockForm
      })
    })
  })
})

export const { useGetStockPricesBetweenDaysQuery } = stocksQuoteApi

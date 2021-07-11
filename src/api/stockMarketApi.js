import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import appConfig from '../appConfig.json'

const stocksApiUrl = appConfig[process.env.NODE_ENV].stocksApiUrl
export const stocksQuoteApi = createApi({
  reducerPath: 'stocksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${stocksApiUrl}/api/v1/`
  }),
  endpoints: (builder) => ({
    getStockPrices: builder.query({
      query: (stockForm) => ({
        url: 'stock',
        params: stockForm
      })
    })
  })
})

export const { useGetStockPricesQuery } = stocksQuoteApi

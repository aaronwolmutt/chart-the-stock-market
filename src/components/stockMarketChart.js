import React from 'react'
import { useSelector } from 'react-redux'
import { useGetStockPricesQuery } from '../api/stockMarketApi'

const StockMarketChart = () => {
  const stockMarketFormData = useSelector((state) => (state.stockMarket.formData))
  const { data, isFetching, error } = useGetStockPricesQuery(stockMarketFormData, {
    skip: false
  })
  return (
    <div className="stockMarketChart">
      {!isFetching && !error
        ? <ul>
            { data.map((price) => <li key={price.date}>Date: {price.date} Close: {price.close}</li>) }
          </ul>
        : null
      }
      {error
        ? <p>Add alert here</p>
        : null
      }
    </div>
  )
}
export default StockMarketChart

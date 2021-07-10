import React from 'react'
import { useSelector } from 'react-redux'
import { useGetStockPricesBetweenDaysQuery } from '../api/stockMarketApi'

const StockMarketChart = () => {
  const stockMarketFormData = useSelector((state) => (state.stockMarket.formData))
  const defaultPrices = useGetStockPricesBetweenDaysQuery(stockMarketFormData)
  console.log(defaultPrices)
  return (
    <div className="stockChart">
      <h1>test fetch:</h1>
    </div>
  )
}
export default StockMarketChart

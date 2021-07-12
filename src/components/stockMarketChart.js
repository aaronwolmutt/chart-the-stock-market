import React from 'react'
import { useSelector } from 'react-redux'
import { useGetStockPricesQuery } from '../api/stockMarketApi'
import Plot from 'react-plotly.js'

const StockMarketChart = () => {
  const stockMarketFormData = useSelector((state) => (state.stockMarket.formData))
  const { data, isFetching, error } = useGetStockPricesQuery(stockMarketFormData)
  return (
    <div className="stockMarketChart">
      {data && !isFetching && !error
        ? <Plot
            data={[
              {
                x: data.map((entry) => entry.date),
                y: data.map((entry) => entry.close),
                type: 'scatter'
              }
            ]}
            layout={{
              responsive: true,
              title: 'Daily Adjusted Close Price'
            }}
        />
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

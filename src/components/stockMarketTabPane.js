import React from 'react'
import StockMarketFormModal from './stockMarketFormModal'
import StockMarketChart from './stockMarketChart'

const StockMarketTabPane = () => {
  return (
    <div className="stockMarketTabPane">
      <StockMarketChart />
      <StockMarketFormModal />
    </div>
  )
}
export default StockMarketTabPane

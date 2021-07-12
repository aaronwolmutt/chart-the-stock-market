import React from 'react'
import {
  TabContent,
  TabPane
} from 'reactstrap'
import StockMarketTabPane from './stockMarketTabPane'
import StockPricesGrid from './stockPricesGrid'

const StockReportsTabContent = ({ activeTab }) => {
  return (
    <div className="stockReportsTabContent">
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <StockMarketTabPane />
        </TabPane>
        <TabPane tabId="2">
          <StockPricesGrid />
        </TabPane>
      </TabContent>
    </div>
  )
}
export default StockReportsTabContent

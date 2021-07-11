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
        <TabPane tabId="3">
          <h1>Tab 3</h1>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default StockReportsTabContent

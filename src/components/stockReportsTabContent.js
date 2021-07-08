import React from 'react'
import {
  TabContent,
  TabPane
} from 'reactstrap'
import StockMarketFormModal from './stockMarketFormModal'

const StockReportsTabContent = ({ activeTab }) => {
  return (
    <div className="stockReportsTabContent">
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <StockMarketFormModal />
        </TabPane>
        <TabPane tabId="2">
          <h1>Tab 2</h1>
        </TabPane>
        <TabPane tabId="3">
          <h1>Tab 3</h1>
        </TabPane>
      </TabContent>
    </div>
  )
}
export default StockReportsTabContent

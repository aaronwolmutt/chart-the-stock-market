import React, { useState } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap'
import StockReportsTabContent from './stockReportsTabContent'

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('1')
  const onTabChanged = (tab) => {
    if (tab !== activeTab) setActiveTab(tab)
  }
  return (
    <div className="stockReportsTabParent">
      <div className="tabMenu">
        <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => onTabChanged('1')}
            >
            Stock Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => onTabChanged('2')}
            > Stock Chart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => onTabChanged('3')}
            >
              Prices Grid
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <Row>
        <StockReportsTabContent
          activeTab={activeTab}
        />
      </Row>
    </div>
  )
}
export default TabMenu

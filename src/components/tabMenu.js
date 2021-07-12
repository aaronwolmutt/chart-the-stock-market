import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap'
import StockReportsTabContent from './stockReportsTabContent'
import { tabSelected } from '../redux/navigationSlice'

const TabMenu = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.navigation.activeTab)
  const onTabChanged = (tab) => {
    dispatch(tabSelected(tab))
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

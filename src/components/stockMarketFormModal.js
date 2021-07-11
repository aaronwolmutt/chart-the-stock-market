import React from 'react'
import { Button, Modal } from 'reactstrap'
import StockMarketForm from './stockMarketForm.js'
import { useDispatch, useSelector } from 'react-redux'
import { openStockMarketFormModal } from '../redux/navigationSlice'

const StockMarketFormModal = () => {
  const dispatch = useDispatch()
  const modalOpened = useSelector((state) => state.navigation.stockMarketFormModalOpened)
  const toggle = () => {
    dispatch(openStockMarketFormModal())
  }
  return (
    <div className="stockMarketFormModal">
      <Button onClick={() => toggle()}>
        Open
      </Button>
      <Modal isOpen={modalOpened}
        toggle={toggle}
        unmountOnClose={false}>
        <StockMarketForm />
      </Modal>
    </div>
  )
}
export default StockMarketFormModal

import React from 'react'
import { useSelector } from 'react-redux'
import { useGetStockPricesQuery } from '../api/stockMarketApi'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'
import { columns } from './stockPricesGridColumns'

const StockPricesGrid = () => {
  const stockMarketFormData = useSelector((state) => (state.stockMarket.formData))
  const { data } = useGetStockPricesQuery(stockMarketFormData)
  return (
    <div className="ag-theme-balham-dark"
        style={
          {
            height: '70vh',
            width: '35vw',
            paddingTop: 10,
            paddingBottom: 10
          }
        }
      >
      <AgGridReact
        columnDefs={columns}
        rowData={data}
      >
      </AgGridReact>
    </div>
  )
}
export default StockPricesGrid

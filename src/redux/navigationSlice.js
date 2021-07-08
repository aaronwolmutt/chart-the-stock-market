import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    stockMarketFormModalOpened: false
  },
  reducers: {
    openStockMarketFormModal: (state) => {
      state.stockMarketFormModalOpened = (!state.stockMarketFormModalOpened)
    }
  }
})

export const { openStockMarketFormModal } = navigationSlice.actions
export default navigationSlice.reducer

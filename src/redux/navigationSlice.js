import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    stockMarketFormModalOpened: false,
    activeTab: '1'
  },
  reducers: {
    openStockMarketFormModal: (state) => {
      state.stockMarketFormModalOpened = (!state.stockMarketFormModalOpened)
    },
    tabSelected: (state, action) => {
      state.activeTab = action.payload
    }
  }
})

export const { openStockMarketFormModal, tabSelected } = navigationSlice.actions
export default navigationSlice.reducer

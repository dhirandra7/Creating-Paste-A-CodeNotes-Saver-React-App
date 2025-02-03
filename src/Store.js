import { configureStore } from '@reduxjs/toolkit'
import PasteReducer from './Redux/PasteSlice'

export const Store = configureStore({
  reducer: {
    Paste: PasteReducer,
  },
})
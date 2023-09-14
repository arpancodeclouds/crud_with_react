import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/features/UserSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})
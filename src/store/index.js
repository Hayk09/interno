import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/loginApi'

export const store = configureStore({
  reducer: {
    user: counterSlice,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})


setupListeners(store.dispatch)
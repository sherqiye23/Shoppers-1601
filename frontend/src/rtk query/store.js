import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shoppersApi } from './slice'

export const store = configureStore({
  reducer: {
    [shoppersApi.reducerPath]: shoppersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shoppersApi.middleware),
})

setupListeners(store.dispatch)
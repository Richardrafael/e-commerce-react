import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './slice/itemSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    item: itemReducer,
  },
});

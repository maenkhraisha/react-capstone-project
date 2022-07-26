import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/COVID/COVID-Slice';

export const store = configureStore({
  reducer: {
    COVID: countriesReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import covidReducer from '../features/COVID/COVID-Slice';

const store = configureStore({
  reducer: {
    COVID: covidReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

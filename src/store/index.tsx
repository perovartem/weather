import {configureStore} from '@reduxjs/toolkit';
import {weatherApi, weatherSlice} from './apiSlice';

const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    weather: weatherSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;

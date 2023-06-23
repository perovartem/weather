import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, KEY } from './constants';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { CityWeather } from '../interface/CityWeather';



interface WeatherState {
  loading: boolean;
  weatherData: CityWeather | null;
  units: string;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  weatherData: null,
  units: 'metric',
  error: null,
};


export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {  
      changeUnits: (state, {payload}) => {
      state.units = payload
    },},
  });
  
  export const {changeUnits} = weatherSlice.actions
  


  export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      fetchWeather: builder.query({
        query: ({city, units}) => `weather?q=${city}&appid=${KEY}&units=${units}`,
        transformResponse: (result: CityWeather) => result
      }),
    }),
  });

  export const { useFetchWeatherQuery } = weatherApi;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchContinents from './COVID-API';

export const initialState = {
  status: 'idle',
  continents: [
    {
      name: '',
      totalCases: 0,
      countries: [],
    },
  ],
};

export const fetchContinentsAsync = createAsyncThunk(
  'news/fetchContinents',
  async (continentName) => {
    const response = await fetchContinents(continentName);
    const totalcases = response.reduce(
      (total, item) => item.TotalCases + total,
      0,
    );
    const data = {
      name: continentName,
      totalCases: totalcases,
      countries: response,
    };
    console.log(data);
    return data;
  },
);

export const covidSlice = createSlice({
  name: 'COVID',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinentsAsync.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchContinentsAsync.fulfilled, (state, action) => ({
        ...state,
        status: 'idle',
        continents: [
          ...state.continents,
          {
            name: action.payload.name,
            totalCases: action.payload.totalCases,
            countries: action.payload.countries,
          },
        ],
      }));
  },
});

export const selectState = (state) => state.COVID;

export default covidSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './COVID-API';

const initialState = {
  status: 'idel',
  value: [],
};

export const fetchCountriesAsync = createAsyncThunk('news/fetchCountries', async () => {
  const response = await fetchCountries();
  return response;
});

export const countriesSlice = createSlice({
  name: 'COVID',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectCountries = (state) => state.COVID;

export default countriesSlice.reducer;

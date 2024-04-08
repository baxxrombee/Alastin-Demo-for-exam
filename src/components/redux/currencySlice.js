import { createSlice } from '@reduxjs/toolkit';

// Helper function to get initial currency from local storage
const getInitialCurrency = () => {
  const currency = localStorage.getItem('currency');
  return currency ? currency : 'USD';
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: getInitialCurrency(),
  },
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem('currency', action.payload); // Save to local storage
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export const selectCurrency = (state) => state.currency.currency;

export default currencySlice.reducer;

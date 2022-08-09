import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import itemService from '../services/itemService';

const initialState = {
  items: [],
  item: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

export const getAllItems = createAsyncThunk(
  'items/get',

  async (_) => {
    const data = await itemService.getAllItems();

    return data;
  }
);


export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.items = action.payload;
      });
  },
});

export default itemSlice.reducer;

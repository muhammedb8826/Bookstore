import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  isLoading: true,
};

const categoriesSlice = createSlice({
  name: 'category',
  status: 'Under construction',
  initialState,
});

export default categoriesSlice.reducer;

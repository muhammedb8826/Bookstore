import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
});

export default booksSlice.reducer;

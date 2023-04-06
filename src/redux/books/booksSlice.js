import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const initialState = {
  books: bookItems,
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.item_id !== payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

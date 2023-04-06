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
      state.books.push({
        id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
    removeBook: (state, { payload }) => {
      state.books.filter((book) => book.id !== payload.item_id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

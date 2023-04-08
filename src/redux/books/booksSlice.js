import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const requestedId = 'E7fGkzzEJ-1Bt95wt7R4s';
const url = `${baseUrl}/${requestedId}/books`;

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

export const getBooks = createAsyncThunk('book/getBooks', async (data, { rejectWithValue }) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const postBook = createAsyncThunk(
  'post/postBook',
  async (book) => {
    const response = await axios.post(url, book);
    return response.data;
  },
);

export const deleteBook = createAsyncThunk(
  'delete/deleteBook',
  async (id) => {
    const bookItem = `${url}/${id}`;
    const response = await axios.delete(bookItem);
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;

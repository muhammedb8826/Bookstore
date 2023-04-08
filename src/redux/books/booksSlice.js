import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const requestedId = '26VQCgZeIQMuYz9e44m4';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${requestedId}/books`;

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

export const getBooks = createAsyncThunk('booklist/getBooklist', async ({ rejectWithValue }) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const postBook = createAsyncThunk(
  'post/postBook',
  async (data) => {
    const response = await axios.post(url, data);
    return response.data;
  },
);

export const deleteBook = createAsyncThunk('bookList/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    const resp = await axios.delete(itemId);
    return resp.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

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
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;

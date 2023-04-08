import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const requestedId = 'zh7lF3k8bpFDKnS7V9pp';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${requestedId}/books`;

const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

export const getBooks = createAsyncThunk('books/getBooks', async (data, { rejectWithValue }) => {
  try {
    const resp = await axios(url);
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

export const deleteBook = createAsyncThunk('delete/deleteBook', async (itemId, { rejectWithValue }) => {
  try {
    const book = `${url}/${itemId}`;
    await axios.delete(book);
    return itemId;
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
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.books = payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => ({ ...state }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
      }));
  },
});

export default booksSlice.reducer;

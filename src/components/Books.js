import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './AddBook';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

export default function Books() {
  const { books, isLoading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>Something went wrong!</div>
    );
  }

  return (
    <div>
      <div className="book-list">
        <ul>
          {books.length >= 1 ? books.map((book) => (
            <li key={book.item_id}>
              <span>{book.category}</span>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className="buttons">
                <button type="button">Comments</button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteBook(book.item_id));
                  }}
                >
                  Remove
                </button>
                <button type="button">Edit</button>
              </div>
            </li>
          )) : <p>No Books were added!</p>}
        </ul>
      </div>
      <hr />
      <AddBook />
    </div>
  );
}

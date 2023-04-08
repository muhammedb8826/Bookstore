import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBook from './AddBook';
import {
  getBooks, deleteBook, deleteBookLocal, setError,
} from '../redux/books/booksSlice';

export default function Books() {
  const { books, isLoading, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
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

  const handleClick = async (id) => {
    try {
      await dispatch(deleteBook(id));
      dispatch(deleteBookLocal(id));
    } catch {
      dispatch(setError(true));
    }
  };

  return (
    <div>
      <div className="book-list">
        <ul>
          {Object.keys(books).map((book) => (
            <li key={book}>
              <span>{books[book][0].category}</span>
              <h3>{books[book][0].title}</h3>
              <p>{books[book][0].author}</p>
              <div className="buttons">
                <button type="button">Comments</button>
                <button
                  type="button"
                  onClick={() => { handleClick(book); }}
                >
                  Remove
                </button>
                <button type="button">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <AddBook />
    </div>
  );
}

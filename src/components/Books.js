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
      <div className="error-message">Something went wrong!</div>
    );
  }

  const handleClick = async (id) => {
    try {
      dispatch(deleteBook(id));
      dispatch(deleteBookLocal(id));
    } catch {
      dispatch(setError(true));
    }
  };

  return (
    <section>
      <div className="book-list">
        <ul>
          {Object.keys(books).length > 0 ? Object.keys(books).map((book) => (
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
          )) : <p className="no-book">No books were added</p>}
        </ul>
        <div className="progress-and-chapter">
          <div className="progress">
            <span className="loading" />
            <p className="percent">64%</p>
          </div>
          <div className="chapter">
            <span>CURRENT CHAPTER</span>
            <p>Chapter17</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
      <hr />
      <AddBook />
    </section>
  );
}

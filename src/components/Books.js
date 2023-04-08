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
              <div className="books">
                <span>{books[book][0].category}</span>
                <h2>{books[book][0].title}</h2>
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
              </div>
              <div className="progress-and-chapter">
                <div className="progress">
                  <div className=".rt-container">
                    <div className="radialProgressBar progress-60">
                      <div className="overlay">{}</div>
                    </div>
                  </div>
                  <p className="percent">64%</p>
                </div>
                <div className="chapter">
                  <span>CURRENT CHAPTER</span>
                  <p>Chapter17</p>
                  <button type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            </li>
          )) : <p className="no-book">No books were added</p>}
        </ul>
      </div>
      <hr />
      <AddBook />
    </section>
  );
}

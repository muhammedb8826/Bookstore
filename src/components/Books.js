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
          {Object.keys(books).map((book) => (
            <li key={books[book]}>
              <span>{books[book][0].category}</span>
              <h3>{books[book][0].title}</h3>
              <p>{books[book][0].author}</p>
              <div className="buttons">
                <button type="button">Comments</button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(deleteBook(book));
                  }}
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

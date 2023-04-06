import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import { removeBook } from '../redux/books/booksSlice';

export default function Books() {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="book-list">
        <ul>
          {books ? books.map((book) => (
            <li key={book.item_id}>
              <span>{book.category}</span>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <div className="buttons">
                <button type="button">Comments</button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeBook(book.item_id));
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

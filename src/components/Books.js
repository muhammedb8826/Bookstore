import { useState } from 'react';

export default function Books() {
  const [book, setBook] = useState({
    bookTitle: '',
    bookAuthor: '',
  });

  const handleChange = (e) => {
    setBook((prevFormData) => ({
      ...prevFormData, [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    book.bookTitle = '';
    book.bookAuthor = '';
  };

  return (
    <div>
      <div className="book-list">
        <h1>{book.bookTitle}</h1>
        <p>{book.bookAuthor}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <hr />
      <div className="form">
        <h2>ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Book title" name="bookTitle" onChange={handleChange} value={book.bookTitle} required />
          <input type="text" placeholder="Author" name="bookAuthor" onChange={handleChange} value={book.bookAuthor} required />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

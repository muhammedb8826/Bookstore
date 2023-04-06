import { useState } from 'react';

const AddBook = () => {
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
    <div className="form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" name="bookTitle" onChange={handleChange} value={book.bookTitle} required />
        <input type="text" placeholder="Author" name="bookAuthor" onChange={handleChange} value={book.bookAuthor} required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

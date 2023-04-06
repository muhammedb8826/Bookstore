import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBook((prevFormData) => ({
      ...prevFormData, [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ item_id: uuidv4(), title: book.title, author: book.author }));
    setBook({
      title: '', author: '',
    });
  };
  return (
    <div className="form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" name="title" onChange={handleChange} value={book.title} required />
        <input type="text" placeholder="Author" name="author" onChange={handleChange} value={book.author} required />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

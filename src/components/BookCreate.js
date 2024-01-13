import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
  const [title, setTitle] = useState("");

  const { createBook } = useContext(BooksContext);

  const onChange = function (e) {
    setTitle(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a new Book</h3>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={onChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;

import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = function (e) {
    setTitle(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button-is-primary">Edit</button>
      </form>
    </div>
  );
};

export default BookEdit;

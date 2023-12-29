import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const onChange = function (e) {
    setTitle(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    onCreate(title);
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

import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = function () {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = function () {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;

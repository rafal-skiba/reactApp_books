import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = function (id, newTitle) {
    const updateBooks = books.map((book) => {
      if ((book.id = id)) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updateBooks);
  };

  const deleteBookById = function (id) {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const createBook = function (title) {
    const updateBooks = [
      ...books,
      { id: Math.floor(Math.random() * 999), title },
    ];

    setBooks(updateBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

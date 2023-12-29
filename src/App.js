import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = function (title) {
    const updateBooks = function () {
      [...books, { id: 123, title: title }];
    };
    setBooks(updateBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

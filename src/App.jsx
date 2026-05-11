import { useState } from "react";

import "./App.css";
import Form from "./contents/form";
import List from "./contents/list";

function App() {
  const [books, setBooks] = useState([]);

  function addBooks(book) {
    setBooks([...books, book]);
  }

  function deleteBooks(id) {
    const updateBooks = books.filter((book) => book.id !== id);
    setBooks(updateBooks);
  }

  return (
    <>
      <main>
        <h1>Book List:</h1>
        <Form addBooks={addBooks} />
        <List books={books} deleteBook={deleteBooks} />
      </main>
    </>
  );
}

export default App;

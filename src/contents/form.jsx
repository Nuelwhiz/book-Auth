import { useState, useEffect } from "react";
export default function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function handdleSetTitle(event) {
    setTitle(event.target.value);
  }

  function handdleSetAuthor(event) {
    setAuthor(event.target.value);
  }
  const newBook = {
    id: Date.now(),
    title: title,
    author: author,
  };

  function handleSubmit(event) {
    event.preventDefault();
    newBook;
    props.addBooks(newBook);
    setTitle("");
    setAuthor("");
  }

  //count
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((prev) => prev + 1);
  }

  function reducCount() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  /* useEffect(() => {
    if (count === 10) {
      alert("yoo!! " + count);
    } else if (count === 0) {
      alert("min count reached");
    } else {
    }
  }, [count]); */

  //count

  return (
    <>
      <main className="form">
        <form onSubmit={handleSubmit}>
          <section className=" form-section">
            <div className="title-input-container">
              <input
                type="text"
                placeholder="Book title"
                value={title}
                onChange={handdleSetTitle}
                name="title"
              />
            </div>

            <div className="author-input-container">
              <input
                type="text"
                placeholder="Book author"
                value={author}
                onChange={handdleSetAuthor}
                name="author"
              />
            </div>
            <button type="submit">Add book</button>
          </section>
        </form>
        {/*         <div className="count">
          <button onClick={addCount}>add</button>
          <h1>{count}</h1>
          <button onClick={reducCount}>reduce</button>
        </div>
 */}{" "}
      </main>
    </>
  );
}

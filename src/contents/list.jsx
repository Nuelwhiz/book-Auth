import Item from "./item";

export default function List(props) {
  function renderBook(book) {
    return <Item key={book.id} book={book} deleteBook={props.deleteBook} />;
  }
  return (
    <>
      <div>{props.books.map(renderBook)}</div>
    </>
  );
}

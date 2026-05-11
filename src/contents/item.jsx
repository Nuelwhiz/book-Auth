export default function Item(props) {
  
  function handleDelete() {
    props.deleteBook(props.book.id);
  }
  return (
    <div className="item-container">
      <p>{props.book.title}</p>
      <h2>{props.book.author}</h2>
      <button onClick={handleDelete} className="handle-delete-button">
        Delete
      </button>
    </div>
  );
}

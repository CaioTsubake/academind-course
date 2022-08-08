function Todo(props) {
  function deletar() {
    console.log("Clicado!");
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deletar}>Deletar</button>
      </div>
    </div>
  );
}

export default Todo;

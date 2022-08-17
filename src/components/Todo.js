import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalAberto, setModalAberto] = useState(false);

  function deletar() {
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
  }

  function confirmarDelete() {
    console.log("Confirmado");
    setModalAberto(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deletar}>
          Deletar
        </button>
      </div>
      {modalAberto ? <Backdrop onCancel={fecharModal} /> : null}
      {modalAberto ? (
        <Modal onConfirm={confirmarDelete} onCancel={fecharModal} />
      ) : null}
    </div>
  );
}

export default Todo;

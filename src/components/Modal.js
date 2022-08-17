function Modal(props) {
  function cancelar() {
    props.onCancel();
  }

  function confirmar() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Tem certeza?</p>
      <button className="btn btn--alt" onClick={cancelar}>
        Cancelar
      </button>
      <button className="btn" onClick={confirmar}>
        Sim
      </button>
    </div>
  );
}

export default Modal;

function Modal({ content, id }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box max-w-3xl bg-background px-16 py-12">
        {content}
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-3 top-3">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;

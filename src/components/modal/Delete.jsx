import React, { useRef, useEffect } from "react";
import "../../App.css";

export default function Modal({ id, close, remove, todoText }) {
  const modalRef = useRef();

  const onClickOutside = (e) => {
    const el = e.target;

    if (modalRef.current && !modalRef.current.contains(el)) {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", onClickOutside);

    return () => {
      document.body.removeEventListener("click", onClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemove = (e) => {
    e.preventDefault();
    remove(id);
    close();
  };

  return (
    <div className="modal__overlay">
      <div ref={modalRef} className="modal__card">
        <h3 className="delete__modal-header">Proceed to remove todo</h3>
        <p className="modal__text">{todoText}</p>
        <div className="delete__modal-btns">
          <button onClick={handleRemove} className="delete__modal">
            Remove
          </button>
          <button onClick={close} className="cancel__modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

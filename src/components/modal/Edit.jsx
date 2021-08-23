import React, { useRef, useEffect, useState } from "react";
import "../../App.css";

export default function Modal({
  close,
  editTodo,
  id,
  setTodos,
  todoText,
  setTodoText,
}) {
  const modalRef = useRef();
  const inputRef = useRef();

  const [value, setValue] = useState(todoText);

  const onClickOutside = (e) => {
    const el = e.target;

    if (modalRef.current && !modalRef.current.contains(el)) {
      e.preventDefault();
      e.stopPropagation();
      close();
    }
  };

  useEffect(() => {
    inputRef.current.focus();

    document.body.addEventListener("click", onClickOutside);

    return () => {
      document.body.removeEventListener("click", onClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    setTodoText({ value });
    editTodo(id, value);
    close();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="modal__overlay">
      <div ref={modalRef} className="modal__card">
        <h3 className="delete__modal-header">Edit Todo</h3>
        <p className="modal__text">{value}</p>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={handleChange}
        />
        <div className="delete__modal-btns">
          <button onClick={handleEdit} className="edit__modal">
            Edit
          </button>
          <button onClick={close} className="cancel__modal">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

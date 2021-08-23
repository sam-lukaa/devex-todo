import React from "react";
import "../App.css";

export default function Todo({
  todo,
  handleRemoveTodo,
  handleComplete,
  setModalId,
  setTodoText,
  handleEdit,
}) {
  const handleModal = (id) => {
    setTodoText(todo.text);
    setModalId(id);
    handleRemoveTodo(id);
  };

  const editModal = (id) => {
    setTodoText(todo.text);
    setModalId(id);
    handleEdit(id);
  };

  return (
    <div className="todo__item" key={todo.id}>
      <div className="todo__text">
        {/* <div className="switch">
          <input
            id="switch-1"
            className="switch__input"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleComplete(todo.id)}
          />
          <label htmlFor="switch-1" className="switch__label">
            Switch
          </label>
        </div> */}
        <h3
          className={`todo ${
            todo.completed ? "todo__completed" : "todo__uncompleted"
          }`}
        >
          {todo.text}
        </h3>
      </div>

      <div>
        <button onClick={() => editModal(todo.id)} className="todo__btn">
          <i class="fas fa-edit"></i>
        </button>

        <button onClick={() => handleModal(todo.id)} className="todo__btn">
          <i class="fas fa-minus-circle"></i>
        </button>

        <button onClick={() => handleComplete(todo.id)} className="todo__btn">
          {todo.completed ? (
            <i class="fas fa-check-circle"></i>
          ) : (
            <i class="far fa-check-circle"></i>
          )}
        </button>
      </div>
    </div>
  );
}

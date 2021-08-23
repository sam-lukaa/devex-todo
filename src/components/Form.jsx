import React from "react";
import "../App.css";

export default function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: Math.random() * 1000, text: inputText, completed: false },
    ]);

    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form__header">
      <div className="form__handle">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="todo__input"
        />
        <button className="add-todo__button">Add Todo</button>
      </div>
      <select onChange={handleStatus} className="todo__filter">
        <option className="todo__filter-option" value="all">All</option>
        <option className="todo__filter-option" value="in-progress">In Progress</option>
        <option className="todo__filter-option" value="completed">Completed</option>
      </select>
    </form>
  );
}

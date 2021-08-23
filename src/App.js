import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleFilter();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "in-progress":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(localTodos);
    }
  };

  return (
    <div className="app">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        handleFilter={handleFilter}
        setStatus={setStatus}
      />

      <TodoList setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

import React, { useState } from "react";
import Todo from "./Todo";
import Delete from "./modal/Delete";
import Edit from "./modal/Edit";

export default function TodoList({ setTodos, filteredTodos }) {
  const [showModal, setShowModal] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [modalId, setModalId] = useState();

  const closeModal = () => {
    setShowModal(false);
  };

  const closeEditModal = () => {
    setEditTodo(false);
  };

  const handleRemoveTodo = (id) => {
    setTodos(filteredTodos.filter((todo) => id !== todo.id));
  };

  const handleEditTodo = (id, value) => {
    setTodos(
      filteredTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: value };
        }
        return todo;
      })
    );
  };

  const handleModal = (id) => {
    setShowModal(!showModal);
    setModalId(id);
  };

  const handleEdit = (id) => {
    setEditTodo(!editTodo);
    setModalId(id);
  };

  const handleComplete = (id) => {
    setTodos(
      filteredTodos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      {showModal && (
        <Delete
          close={closeModal}
          remove={handleRemoveTodo}
          id={modalId}
          setTodos={setTodos}
          todoText={todoText}
        />
      )}

      {editTodo && (
        <Edit
          close={closeEditModal}
          editTodo={handleEditTodo}
          id={modalId}
          setTodos={setTodos}
          todoText={todoText}
          setTodoText={setTodoText}
        />
      )}
      <ul>
        {filteredTodos.map((todo) => (
          <div>
            <Todo
              setTodos={setTodos}
              todos={filteredTodos}
              setTodoText={setTodoText}
              todo={todo}
              handleRemoveTodo={handleModal}
              setModalId={setModalId}
              handleComplete={handleComplete}
              editTodo={editTodo}
              handleEdit={handleEdit}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

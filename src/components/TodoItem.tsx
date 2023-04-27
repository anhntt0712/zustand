import React, { useState } from "react";
import useTodoStore, { Todo } from "../store/todo.store";

function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.text);

  const { removeTodo, updateTodo, makeCompleted } = useTodoStore();
  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    updateTodo({
      ...todo,
      text: task,
    });
    toggleFrom();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const toggleCompleted = () => {
    makeCompleted(todo.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.isCompleted ? "Todo-task completed" : "Todo-task"}
        >
          {todo.text}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default TodoItem;

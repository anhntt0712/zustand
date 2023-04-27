import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import useTodoStore from "../store/todo.store";

function NewTodoForm() {
  const [inputTodo, setInputTodo] = useState<string>("");

  const { createTodo } = useTodoStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = { id: uuid(), text: inputTodo, isCompleted: false };
    createTodo(newTodo);
    setInputTodo("");
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={inputTodo}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;

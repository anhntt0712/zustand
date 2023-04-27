import useTodoStore from "../store/todo.store";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodoStore();
  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <TodoCreate />
    </div>
  );
};

export default TodoList;

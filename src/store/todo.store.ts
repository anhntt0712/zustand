import { create } from "zustand";
export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}
interface TodoState {
  todos: Todo[];
  createTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  makeCompleted: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  createTodo: (todo: Todo) =>
    set((state) => ({ todos: [...state.todos, todo] })),

  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    }));
  },

  updateTodo: (updatedTodo: Todo) => {
    set((state) => {
      const newTodos = state.todos.map((todo: Todo) =>
        updatedTodo.id === todo.id ? updatedTodo : todo
      );
      return {
        todos: newTodos,
      };
    });
  },

  makeCompleted: (id: string) => {
    set((state) => {
      const newTodos = state.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      return {
        todos: newTodos,
      };
    });
  },
}));

export default useTodoStore;

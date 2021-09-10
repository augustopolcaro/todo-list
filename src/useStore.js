import create from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "react-uid";

const useStore = create(
  persist((set) => ({
    todos: [],
    addTodo: (todoTitle, todoDescription) =>
      set((state) => ({
        todos: [
          ...state.todos,
          {
            title: todoTitle,
            description: todoDescription,
            id: uid(`${todoTitle}-${state.todos.length}`),
            isCompleted: false,
          },
        ],
      })),
    deleteTodo: (todoId) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== todoId),
      })),
  }))
);

export default useStore;

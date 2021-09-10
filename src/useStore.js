import create from "zustand";
import { uid } from "react-uid";

export const useStore = create((set) => ({
  todos: [],
  addTodo: (todoText, todoDescription) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todoText,
          description: todoDescription,
          id: uid(`${todoText}-${state.todos.length}`),
          isCompleted: false
        }
      ]
    }))
}));

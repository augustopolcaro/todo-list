import create from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "react-uid";

const findTodo = (todos, id) =>
  todos.find((todo) => todo.id === id) || emptyTodo;

const emptyTodo = {
  id: "",
  title: "",
  description: "",
  isCompleted: false,
};

const useStore = create(
  persist((set) => ({
    todos: [],
    showModal: false,
    selectedTodo: emptyTodo,
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
    updateTodo: (todoId, todoTitle, todoDescription) =>
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              title: todoTitle,
              description: todoDescription,
            };
          }
          return todo;
        }),
      })),
    deleteTodo: (todoId) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== todoId),
      })),
    toggleCompleteTodo: (todoId) =>
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }
          return todo;
        }),
      })),
    toggleModal: (todoId) =>
      set((state) => ({
        showModal: !state.showModal,
        selectedTodo: findTodo(state.todos, todoId),
      })),
  }))
);

export default useStore;

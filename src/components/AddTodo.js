import React from "react";
import { useStore } from "../useStore.js";

function AddTodo() {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoDescription, setTodoDescription] = React.useState("");
  const { addTodo } = useTodoStore((state) => state);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoTitle, todoDescription);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <textarea
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      />
    </form>
  );
}

export default AddTodo;

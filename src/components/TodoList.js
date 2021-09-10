import React from "react";

function TodoList() {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoDescription, setTodoDescription] = React.useState("");
  return (
    <>
      <AddTodo />
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <textarea />
    </>
  );
}

export default TodoList;

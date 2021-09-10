import React from "react";
import useStore from "../useStore";

function TodoList() {
  const { todos, deleteTodo } = useStore((state) => state);
  const openModal = () => {
    console.log("Clicking");
  };
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>
                <h1 onClick={openModal}>{todo.title}</h1>
                <p>{todo.description}</p>
                <input type="checkbox" />
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;

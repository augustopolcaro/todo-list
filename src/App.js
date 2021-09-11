import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <TodoModal />
    </div>
  );
}

export default App;

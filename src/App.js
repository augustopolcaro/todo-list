import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container style={{ display: "flex" }} className="justify-content-center">
        <Row className="justify-content-md-center">
          <AddTodo />
          <TodoList />
        </Row>
      </Container>
    </div>
  );
}

export default App;

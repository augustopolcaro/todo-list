import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col sm={4}>
          <h1 className="mb-4">A Simple To-Do List</h1>
          <AddTodo />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col sm={9}>
          <TodoList />
        </Col>
      </Row>
      <TodoModal />
    </Container>
  );
}

export default App;

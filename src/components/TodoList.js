import React from "react";
import useStore from "../useStore";
import { ListGroup, Card, Container, Row, Col } from "react-bootstrap";
function TodoList() {
  const { todos, toggleCompleteTodo } = useStore((state) => state);
  const openModal = () => {
    console.log("Clicking");
  };
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <ListGroup.Item
            style={{
              background: todo.isCompleted ? "#90EE90" : "none",
            }}
            className="list-group-item"
            key={todo.id}
          >
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title className="clickable" onClick={openModal}>
                    {todo.title}
                  </Card.Title>
                  <Card.Text>{todo.description}</Card.Text>
                </Card.Body>
              </Col>
              <Col className="my-auto">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`gridCheck-${todo.id}`}
                      checked={todo.isCompleted}
                      onChange={(e) => toggleCompleteTodo(todo.id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`gridCheck-${todo.id}`}
                    >
                      Complete
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;

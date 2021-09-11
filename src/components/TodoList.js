import React from "react";
import useStore from "../useStore";
import { ListGroup, Card, Container, Row, Col } from "react-bootstrap";
function TodoList() {
  const { todos, deleteTodo, toggleCompleteTodo } = useStore((state) => state);
  const openModal = () => {
    console.log("Clicking");
  };
  const handleComplete = (id, e) => {
    toggleCompleteTodo(id, e.target.checked);
  };
  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <ListGroup.Item className="list-group-item" key={todo.id}>
            <Container>
              <Row>
                <Col>
                  <Card.Body>
                    <Card.Title onClick={openModal}>{todo.title}</Card.Title>
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
                        onChange={(e) => handleComplete(todo.id, e)}
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
            </Container>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;

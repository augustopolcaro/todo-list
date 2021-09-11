import React from "react";
import useStore from "../useStore";
import { ListGroup, Card, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function TodoList() {
  const { todos, toggleCompleteTodo, toggleModal } = useStore((state) => state);

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
                <Card>
                  <Card.Body style={{ width: "30vw" }}>
                    <Card.Title
                      className="clickable"
                      onClick={() => toggleModal(todo.id)}
                    >
                      {todo.title}
                    </Card.Title>
                    <Card.Text>
                      <ReactMarkdown>{todo.description}</ReactMarkdown>
                    </Card.Text>
                  </Card.Body>
                </Card>
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

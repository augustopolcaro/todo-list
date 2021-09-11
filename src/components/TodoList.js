import React from "react";
import useStore from "../useStore";
import { ListGroup, Form, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

function TodoList() {
  const { todos, toggleCompleteTodo, toggleModal } = useStore((state) => state);

  return (
    <ListGroup>
      {todos.map((todo) => {
        return (
          <ListGroup.Item
            variant={todo.isCompleted ? "success" : ""}
            className="list-group-item"
            key={todo.id}
          >
            <Row>
              <Col className="justify-content-md-center">
                <h3 className="clickable" onClick={() => toggleModal(todo.id)}>
                  {todo.title}
                </h3>
                <ReactMarkdown className="sm-6 text-break overflow-auto">
                  {todo.description}
                </ReactMarkdown>
              </Col>
              <Col className="my-auto">
                <Form.Check
                  type="switch"
                  label="Complete this task"
                  id={`gridCheck-${todo.id}`}
                  checked={todo.isCompleted}
                  onChange={(e) => toggleCompleteTodo(todo.id)}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;

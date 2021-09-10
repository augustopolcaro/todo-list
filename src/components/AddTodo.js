import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import useStore from "../useStore";

function AddTodo() {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoDescription, setTodoDescription] = React.useState("");
  const { addTodo } = useStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoTitle, todoDescription);
    emptyValues();
  };

  const emptyValues = () => {
    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Todo Title: </Form.Label>
          <Form.Control
            placeholder="Enter To-Do Title"
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Text
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add To-Do
        </Button>
      </Form>
    </Container>
  );
}

export default AddTodo;

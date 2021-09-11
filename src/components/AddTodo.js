import React from "react";
import { Form, Button } from "react-bootstrap";
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
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="To-Do Description"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="success" className="mb-3">
        Add To-Do
      </Button>
    </Form>
  );
}

export default AddTodo;

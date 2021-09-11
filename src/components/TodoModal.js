import React, { useEffect } from "react";
import useStore from "../useStore";
import { Form, Modal, Button } from "react-bootstrap";

function TodoModal() {
  const { toggleModal, updateTodo, selectedTodo, showModal, deleteTodo } =
    useStore((state) => state);
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoDescription, setTodoDescription] = React.useState("");

  useEffect(() => {
    setTodoTitle(selectedTodo.title);
    setTodoDescription(selectedTodo.description);
  }, [selectedTodo.description, selectedTodo.title]);

  const handleSave = () => {
    if (todoTitle) {
      updateTodo(selectedTodo.id, todoTitle, todoDescription);
      toggleModal();
    }
  };

  const handleDelete = () => {
    deleteTodo(selectedTodo.id);
    toggleModal();
  };

  return (
    <Modal
      show={showModal}
      onHide={toggleModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Form.Control
            className="border-0"
            placeholder="Enter To-Do Title"
            type="text"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            required
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="textarea"
          className="border-0"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
        >
          {selectedTodo.description}
        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
          Delete To-Do
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoModal;

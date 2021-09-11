import React, { useRef, useEffect } from "react";
import useStore from "../useStore";
import { Modal, Button } from "react-bootstrap";

function TodoModal() {
  const { toggleModal, updateTodo, selectedTodo, showModal, deleteTodo } =
    useStore((state) => state);
  const modalRef = useRef();
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
    <>
      <Modal
        ref={modalRef}
        show={showModal}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              placeholder="Enter To-Do Title"
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              required
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            value={todoDescription}
            onChange={(e) => setTodoDescription(e.target.value)}
          >
            {selectedTodo.description}
          </textarea>
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
    </>
  );
}

export default TodoModal;

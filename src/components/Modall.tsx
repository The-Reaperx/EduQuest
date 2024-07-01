import { Modal } from "react-bootstrap";
import TemplateDemo from "./FileDrop";
import { Button } from "primereact/button";
import { useState } from "react";

function Modall() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create your Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TemplateDemo />
      </Modal.Body>
      <Modal.Footer>
        <Button label="Close" severity="secondary" onClick={handleClose} />
        <Button label="Upload PDF" severity="help" onClick={handleClose} />
      </Modal.Footer>
    </Modal>
  );
}

export default Modall;

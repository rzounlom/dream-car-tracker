import Button from "react-bootstrap/Button";
import { FC } from "react";
import Modal from "react-bootstrap/Modal";

type DeleteCarModalProps = {
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
  handleDelete: () => void;
};

const DeleteCarModal: FC<DeleteCarModalProps> = ({
  show,
  handleClose,
  handleDelete,
  handleShow,
}) => {
  return (
    <>
      <Button
        variant="outline-danger"
        onClick={handleShow}
        className="delete-btn"
      >
        Delete
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this car?</Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ width: "48%" }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ width: "48%" }}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCarModal;

import { FC, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteCar } from "../../api";
import { useRevalidator } from "react-router-dom";

type DeleteCarModalProps = {
  id: string;
  show: boolean;
  handleShow: () => void;
  handleClose: () => void;
};

const DeleteCarModal: FC<DeleteCarModalProps> = ({
  id,
  show,
  handleClose,
  handleShow,
}) => {
  const [loading, setLoading] = useState(false);
  const { revalidate } = useRevalidator();
  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteCar(id); // ✅ use your deleteCar function
      revalidate(); // 🔁 refresh the loader for /cars
      handleClose(); // 👋 close the modal
    } catch (error) {
      console.error("Error deleting car:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="outline-danger"
        onClick={handleShow}
        className="delete-btn"
        disabled={loading}
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
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ width: "48%" }}
            disabled={loading}
          >
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCarModal;

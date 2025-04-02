import "./CarCard.css";

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Car } from "../../types";
import DeleteCarModal from "../modals/DeleteCarModal";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

interface CarCardProps {
  car: Car;
  updateCar: (id: string, updatedCar: Partial<Car>) => void;
  deleteCar: (id: string) => void;
}

const CarCard: React.FC<CarCardProps> = ({
  car: { year, make, model, description, imageUrl, id, favorite },
  updateCar,
  deleteCar,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    deleteCar(id);
    handleClose();
  };

  return (
    <div className="car-card">
      <div
        className="favorite-icon"
        onClick={() => updateCar(id, { favorite: !favorite })}
      >
        <div className="favorite-icon">
          {favorite ? <TiHeartFullOutline /> : <IoMdHeartEmpty />}
        </div>
      </div>
      <div className="car-img">
        <img src={imageUrl} alt={`${year} ${make} ${model}`} />
      </div>

      <div className="car-details">
        <h3>
          {year} {make} {model}
        </h3>
        <p>{description}</p>
      </div>
      <div className="car-footer">
        <Button
          variant="outline-primary"
          className="edit-btn"
          onClick={() => updateCar(id, { favorite: !favorite })}
        >
          Edit
        </Button>
        <DeleteCarModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default CarCard;

import "./CarCard.css";

import { Link, useRevalidator } from "react-router-dom";
import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Car } from "../../types";
import DeleteCarModal from "../modals/DeleteCarModal";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { updateCar } from "../../api";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({
  car: { year, make, model, description, imageUrl, id, favorite },
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { revalidate } = useRevalidator();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggleFavorite = async () => {
    setLoading(true);
    const updatedCar = {
      year,
      make,
      model,
      description,
      imageUrl,
      favorite: !favorite,
    };

    try {
      await updateCar(id, updatedCar);
      revalidate();
    } catch (error) {
      console.error("Error updating car:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="car-card single-car">
      <div className="favorite-icon" onClick={handleToggleFavorite}>
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
        <p>
          {description?.slice(0, 500)}...
          <Link to={`/cars/${id}`}>
            <span className="view-more">View More</span>
          </Link>
        </p>
      </div>
      <div className="car-footer">
        <Button
          variant="outline-primary"
          className="edit-btn"
          disabled={loading}
          onClick={handleToggleFavorite}
        >
          Edit
        </Button>
        <DeleteCarModal
          id={id}
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default CarCard;

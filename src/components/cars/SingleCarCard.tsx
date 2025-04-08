import "./SingleCarCard.css";

import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { Car } from "../../types";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { updateCar } from "../../api";
import { useRevalidator } from "react-router-dom";

interface SingleCarCardProps {
  car: Car;
}

const SingleCarCard: React.FC<SingleCarCardProps> = ({
  car: { year, make, model, description, imageUrl, id, favorite },
}) => {
  const [loading, setLoading] = useState(false);
  const { revalidate } = useRevalidator();

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
    <div className="single-car-card">
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
        <p>{description}</p>
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
      </div>
    </div>
  );
};

export default SingleCarCard;

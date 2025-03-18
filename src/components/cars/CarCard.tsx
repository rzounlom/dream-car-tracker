import "./CarCard.css";

import { Car } from "../../types";
import React from "react";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({
  car: { year, make, model, description, imageUrl },
}) => {
  return (
    <div className="car-card">
      <img
        src={imageUrl}
        alt={`${year} ${make} ${model}`}
        className="car-image"
      />
      <div className="car-details">
        <h3>
          {year} {make} {model}
        </h3>
        <p>{description}</p>
      </div>
      <div className="car-footer">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default CarCard;

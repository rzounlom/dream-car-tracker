import "./CarCard.css";

import { Car } from "../../types";
import React from "react";

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
        <button
          className="edit-btn"
          onClick={() => updateCar(id, { favorite: !favorite })}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteCar(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CarCard;

import "./CarsList.css";

import CarCard from "./CarCard";
import { FC } from "react";
import { cars } from "../../data";

const CarsList: FC = () => {
  return (
    <div id="cars" className="cars-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;

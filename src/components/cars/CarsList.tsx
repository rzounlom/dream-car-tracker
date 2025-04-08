import "./CarsList.css";

import { Car } from "../../types";
import CarCard from "./CarCard";
import { FC } from "react";

type CarsListProps = {
  cars: Car[];
};

const CarsList: FC<CarsListProps> = ({ cars }) => {
  return (
    <div id="cars" className="cars-list">
      {cars?.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;

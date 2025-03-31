import "./CarsList.css";

import { Car } from "../../types";
import CarCard from "./CarCard";
import { FC } from "react";

type CarsListProps = {
  cars: Car[];
  addCar: (newCar: Car) => void;
  updateCar: (id: string, updatedCar: Partial<Car>) => void;
  deleteCar: (id: string) => void;
};

const CarsList: FC<CarsListProps> = ({ cars, updateCar, deleteCar }) => {
  return (
    <div id="cars" className="cars-list">
      {cars?.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          updateCar={updateCar}
          deleteCar={deleteCar}
        />
      ))}
    </div>
  );
};

export default CarsList;

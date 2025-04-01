import "./App.css";

import { Car, NewCar } from "./types";
import { FC, useState } from "react";

import AddCarModal from "./components/modals/AddCarModal";
import CarsList from "./components/cars/CarsList";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { defaultCars } from "./data";
import { sortCarsByCreatedAt } from "./utils/helpers";

const App: FC = () => {
  const [show, setShow] = useState(false);
  const [cars, setCars] = useState<Car[]>(defaultCars);
  console.log({ cars });

  // Show the modal
  const handleOpen = () => setShow(true);
  // Hide the modal
  const handleClose = () => setShow(false);

  // Create a new car
  const addCar = (newCar: NewCar) => {
    setCars((prevCars) => [
      ...prevCars,
      { ...newCar, id: (prevCars.length + 1).toString() },
    ]);
  };

  // Update an existing car
  const updateCar = (id: string, updatedCar: Partial<Car>) => {
    setCars((prevCars) =>
      prevCars.map((car) => (car.id === id ? { ...car, ...updatedCar } : car))
    );
  };

  // Delete a car
  const deleteCar = (id: string) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== id));
  };
  // Sort the cars by createdAt just before rendering
  const sortedCars = sortCarsByCreatedAt([...cars]);

  return (
    <div className="App">
      <AddCarModal
        show={show}
        handleClose={handleClose}
        handleAddCar={addCar}
      />
      <Navbar addCar={addCar} handleOpen={handleOpen} />
      <Landing />
      <CarsList
        cars={sortedCars}
        addCar={addCar}
        updateCar={updateCar}
        deleteCar={deleteCar}
      />
      <Footer />
    </div>
  );
};

export default App;

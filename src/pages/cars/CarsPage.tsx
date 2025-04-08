import { FC, useEffect, useState } from "react";

import CarsList from "../../components/cars/CarsList";
import { MoonLoader } from "react-spinners";
import { fetchCars } from "../../api";

const CarsPage: FC = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cars data from the API
  const handleFetchCars = async () => {
    try {
      const cars = await fetchCars();
      console.log({ cars });
      setCars(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchCars();
  }, []);

  return (
    <div style={{ marginTop: "70px" }}>
      <MoonLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div>
        {!loading && !cars.length ? (
          <h2 style={{ color: "white" }}>No cars added yet</h2>
        ) : (
          <CarsList cars={cars} />
        )}
      </div>
    </div>
  );
};

export default CarsPage;

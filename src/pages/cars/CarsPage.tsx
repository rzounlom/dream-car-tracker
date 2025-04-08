import { useFetcher, useLoaderData } from "react-router-dom";

import CarsList from "../../components/cars/CarsList";
import { FC } from "react";
import { MoonLoader } from "react-spinners";
import { sortCarsByCreatedAt } from "../../utils/helpers";

const CarsPage: FC = () => {
  const fetcher = useFetcher();
  const loading = fetcher.state === "loading";

  const { cars } = useLoaderData();
  const sortedCars = sortCarsByCreatedAt(cars);

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
          <CarsList cars={sortedCars} />
        )}
      </div>
    </div>
  );
};

export default CarsPage;

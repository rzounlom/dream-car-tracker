import { useFetcher, useLoaderData } from "react-router-dom";

import CarsList from "../../components/cars/CarsList";
import { FC } from "react";
import { MoonLoader } from "react-spinners";
import { sortCarsByCreatedAt } from "../../utils/helpers";

const FavoritesPage: FC = () => {
  const fetcher = useFetcher();
  const loading = fetcher.state === "loading";

  const { cars } = useLoaderData();
  const sortedCars = sortCarsByCreatedAt(cars);

  return (
    <div
      style={{
        marginTop: "70px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h2>Favorite Cars</h2>
      <MoonLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div>
        {!loading && !cars.length ? (
          <h2 style={{ color: "white" }}>No favorite cars added yet</h2>
        ) : (
          <CarsList cars={sortedCars} />
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
